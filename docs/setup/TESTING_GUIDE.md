# Testing Guide - Vitest Framework

## Overview

Your application now has comprehensive test coverage using Vitest, a blazing-fast unit test framework for JavaScript/TypeScript.

## What's Tested

✅ **5 Critical Test Suites:**

1. **LeadCaptureForm** (`components/forms/LeadCaptureForm.test.tsx`)
   - Form rendering and validation
   - Successful submission flow
   - Error handling
   - Property search fields
   - Source tracking

2. **useReducedMotion Hook** (`hooks/useReducedMotion.test.ts`)
   - Accessibility compliance (WCAG 2.1)
   - Media query detection
   - Event listener cleanup

3. **Lead Capture API** (`app/api/leads/capture/route.test.ts`)
   - Input validation
   - FUB integration
   - Error responses
   - Data sanitization

4. **FUB Client** (`lib/fub/client.test.ts`)
   - API calls
   - Rate limiting
   - Response caching
   - Retry logic

5. **Claude Rate Limiting** (`middleware/claude-rate-limit.test.ts`)
   - Token bucket algorithm
   - Per-client limits
   - Cost tracking

## Quick Start

### Run Tests

```bash
# Run all tests (watch mode)
npm test

# Run tests once (CI mode)
npm run test:run

# Run with UI (interactive)
npm run test:ui

# Run with coverage
npm run test:coverage

# Watch mode (auto-rerun on changes)
npm run test:watch
```

### Write Your First Test

```typescript
// components/MyComponent.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MyComponent } from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('handles button click', async () => {
    const { user } = userEvent.setup()
    render(<MyComponent />)
    
    await user.click(screen.getByRole('button'))
    
    expect(screen.getByText('Clicked!')).toBeInTheDocument()
  })
})
```

## Test Structure

### Anatomy of a Test

```typescript
describe('ComponentName', () => {  // Test suite
  beforeEach(() => {                // Setup before each test
    vi.clearAllMocks()
  })

  it('does something', () => {      // Individual test
    // Arrange - set up test data
    const props = { name: 'John' }
    
    // Act - perform action
    render(<Component {...props} />)
    
    // Assert - verify outcome
    expect(screen.getByText('John')).toBeInTheDocument()
  })
})
```

### Best Practices

1. **Arrange, Act, Assert (AAA) Pattern**
   ```typescript
   it('submits form successfully', async () => {
     // Arrange
     const onSubmit = vi.fn()
     render(<Form onSubmit={onSubmit} />)
     
     // Act
     await user.type(screen.getByLabelText('Email'), 'test@example.com')
     await user.click(screen.getByRole('button', { name: /submit/i }))
     
     // Assert
     expect(onSubmit).toHaveBeenCalledWith({
       email: 'test@example.com'
     })
   })
   ```

2. **Use Testing Library Queries (in priority order)**
   ```typescript
   // ✅ Best - Accessible to everyone
   screen.getByRole('button', { name: /submit/i })
   screen.getByLabelText('Email')
   screen.getByPlaceholderText('Enter email')
   screen.getByText('Welcome')
   
   // ⚠️ Avoid - Fragile
   screen.getByTestId('submit-button')  // Use sparingly
   container.querySelector('.button')    // Never use
   ```

3. **Mock External Dependencies**
   ```typescript
   // Mock fetch
   global.fetch = vi.fn()
   
   (global.fetch as any).mockResolvedValueOnce({
     ok: true,
     json: async () => ({ data: 'success' })
   })
   
   // Mock module
   vi.mock('@/lib/fub/client', () => ({
     fubClient: {
       createLead: vi.fn().mockResolvedValue({ id: '123' })
     }
   }))
   ```

4. **Test User Interactions**
   ```typescript
   import userEvent from '@testing-library/user-event'
   
   it('handles user input', async () => {
     const user = userEvent.setup()
     render(<SearchForm />)
     
     // Type in input
     await user.type(screen.getByRole('textbox'), 'Las Vegas')
     
     // Click button
     await user.click(screen.getByRole('button'))
     
     // Select from dropdown
     await user.selectOptions(screen.getByRole('combobox'), 'Henderson')
     
     // Check checkbox
     await user.click(screen.getByRole('checkbox'))
   })
   ```

## What to Test

### ✅ Do Test

- **User interactions** - Button clicks, form submissions, input changes
- **Conditional rendering** - Components showing/hiding based on state
- **Error states** - How components handle and display errors
- **Accessibility** - ARIA attributes, keyboard navigation
- **Business logic** - Functions that transform or validate data
- **API integrations** - Mock responses, error handling

### ❌ Don't Test

- **Implementation details** - Internal state, private methods
- **Third-party libraries** - Assume they work (Next.js, React, etc.)
- **Styles** - Use visual regression testing instead (Percy, Chromatic)
- **Network requests** - Always mock `fetch`

## Coverage Goals

**Target: 80% coverage**

```bash
# Generate coverage report
npm run test:coverage

# View HTML report
open coverage/index.html  # Mac
start coverage/index.html # Windows
```

### Coverage by Type

| Type | Target | Current |
|------|--------|---------|
| **Statements** | 80% | TBD |
| **Branches** | 75% | TBD |
| **Functions** | 80% | TBD |
| **Lines** | 80% | TBD |

### What to Cover

**Priority 1 (Must cover):**
- Lead capture forms
- API routes
- Payment/checkout flows
- Authentication logic

**Priority 2 (Should cover):**
- Common UI components
- Custom hooks
- Utility functions
- Error boundaries

**Priority 3 (Nice to have):**
- Layout components
- Static pages
- Configuration files

## Testing Patterns

### Testing Forms

```typescript
it('validates required fields', async () => {
  const user = userEvent.setup()
  render(<LeadForm />)
  
  // Submit without filling fields
  await user.click(screen.getByRole('button', { name: /submit/i }))
  
  // Check for validation errors
  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
})

it('submits valid data', async () => {
  const user = userEvent.setup()
  const onSuccess = vi.fn()
  
  global.fetch = vi.fn().mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true })
  })
  
  render(<LeadForm onSuccess={onSuccess} />)
  
  await user.type(screen.getByLabelText(/email/i), 'test@example.com')
  await user.click(screen.getByRole('button', { name: /submit/i }))
  
  await waitFor(() => {
    expect(onSuccess).toHaveBeenCalled()
  })
})
```

### Testing API Routes

```typescript
it('returns 200 for valid request', async () => {
  const request = new Request('http://localhost/api/leads', {
    method: 'POST',
    body: JSON.stringify({ email: 'test@example.com' })
  })
  
  const response = await POST(request)
  const data = await response.json()
  
  expect(response.status).toBe(200)
  expect(data.success).toBe(true)
})

it('returns 400 for invalid request', async () => {
  const request = new Request('http://localhost/api/leads', {
    method: 'POST',
    body: JSON.stringify({ email: 'invalid' })
  })
  
  const response = await POST(request)
  
  expect(response.status).toBe(400)
})
```

### Testing Hooks

```typescript
it('returns initial value', () => {
  const { result } = renderHook(() => useCounter(0))
  
  expect(result.current.count).toBe(0)
})

it('increments counter', () => {
  const { result } = renderHook(() => useCounter(0))
  
  act(() => {
    result.current.increment()
  })
  
  expect(result.current.count).toBe(1)
})
```

### Testing Async Operations

```typescript
it('loads data asynchronously', async () => {
  global.fetch = vi.fn().mockResolvedValueOnce({
    ok: true,
    json: async () => ({ data: 'success' })
  })
  
  render(<DataComponent />)
  
  // Initially shows loading
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
  
  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('success')).toBeInTheDocument()
  })
  
  // Loading gone
  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
})
```

## CI/CD Integration

Tests automatically run on every PR via GitHub Actions.

### Workflow

1. **PR created/updated** → Tests run automatically
2. **Tests pass** ✅ → Coverage report posted as comment
3. **Tests fail** ❌ → PR blocked, fixes required

### Coverage Thresholds

Tests fail if coverage drops below:
- Statements: 80%
- Branches: 75%
- Functions: 80%
- Lines: 80%

## Debugging Tests

### View Test Output

```bash
# Verbose output
npm run test:ci

# Debug specific test
npm test -- LeadCaptureForm.test.tsx

# Run tests in UI mode (best for debugging)
npm run test:ui
```

### Common Issues

**Problem:** Test times out

```typescript
// ❌ Bad - no await
it('submits form', () => {
  user.click(screen.getByRole('button'))
  expect(screen.getByText('Success')).toBeInTheDocument()
})

// ✅ Good - await async operations
it('submits form', async () => {
  await user.click(screen.getByRole('button'))
  await waitFor(() => {
    expect(screen.getByText('Success')).toBeInTheDocument()
  })
})
```

**Problem:** Can't find element

```typescript
// Use screen.debug() to see what's rendered
it('finds element', () => {
  render(<Component />)
  screen.debug()  // Prints DOM to console
  
  // Use getBy* (throws if not found)
  expect(screen.getByText('Hello')).toBeInTheDocument()
  
  // Use queryBy* (returns null if not found)
  expect(screen.queryByText('Goodbye')).not.toBeInTheDocument()
})
```

**Problem:** act() warning

```typescript
// ❌ Bad - state update outside act()
it('updates state', () => {
  const { result } = renderHook(() => useCounter())
  result.current.increment()  // Warning!
})

// ✅ Good - wrap in act()
it('updates state', () => {
  const { result } = renderHook(() => useCounter())
  act(() => {
    result.current.increment()
  })
})
```

## Resources

- [Vitest Docs](https://vitest.dev/)
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Common Testing Patterns](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next Steps

1. ✅ Tests configured and running
2. ⏭️ Add tests for new features as you build
3. ⏭️ Aim for 80% coverage
4. ⏭️ Run tests before committing (`npm test:run`)
5. ⏭️ Review coverage report weekly

---

**Your site now has:**
- ✅ 5 critical test suites
- ✅ GitHub Actions integration
- ✅ Coverage reporting
- ✅ Automated quality gates

Keep adding tests as you build new features! 🧪
