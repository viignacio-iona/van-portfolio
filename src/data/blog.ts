export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "cypress-best-practices",
    title: "Best Practices for Writing Reliable Cypress Tests",
    slug: "cypress-best-practices",
    excerpt: "Learn how to write maintainable and reliable Cypress tests that won't flake on you.",
    content: `# Best Practices for Writing Reliable Cypress Tests

Cypress has revolutionized end-to-end testing, but writing reliable tests requires following certain best practices. Here are some key strategies:

## 1. Use Custom Commands

Custom commands help reduce code duplication and make tests more maintainable:

\`\`\`typescript
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login');
  cy.get('[data-testid=email]').type(email);
  cy.get('[data-testid=password]').type(password);
  cy.get('[data-testid=submit]').click();
});
\`\`\`

## 2. Implement Robust Waiting Strategies

Instead of using arbitrary timeouts, use Cypress's built-in waiting mechanisms:

\`\`\`typescript
// Good
cy.get('[data-testid=element]').should('be.visible');

// Bad
cy.wait(1000);
\`\`\`

## 3. Use Data Test IDs

Using data-testid attributes makes tests more resilient to UI changes:

\`\`\`typescript
cy.get('[data-testid=submit-button]').click();
\`\`\`

## 4. Handle Asynchronous Operations

Properly handle async operations using Cypress commands:

\`\`\`typescript
cy.intercept('POST', '/api/login').as('loginRequest');
cy.get('[data-testid=login-form]').submit();
cy.wait('@loginRequest');
\`\`\`

## 5. Implement Page Objects

Use page objects to encapsulate page-specific selectors and actions:

\`\`\`typescript
class LoginPage {
  elements = {
    email: '[data-testid=email]',
    password: '[data-testid=password]',
    submit: '[data-testid=submit]'
  };

  login(email: string, password: string) {
    cy.get(this.elements.email).type(email);
    cy.get(this.elements.password).type(password);
    cy.get(this.elements.submit).click();
  }
}
\`\`\`

By following these best practices, you'll write more reliable and maintainable Cypress tests.`,
    date: "2024-03-15",
    author: "Your Name",
    tags: ["Cypress", "Testing", "Automation", "Best Practices"],
    imageUrl: "/blog/cypress-best-practices.jpg"
  },
  {
    id: "api-testing-strategies",
    title: "Effective API Testing Strategies for Microservices",
    slug: "api-testing-strategies",
    excerpt: "Discover comprehensive strategies for testing microservices APIs effectively.",
    content: `# Effective API Testing Strategies for Microservices

Testing microservices APIs requires a different approach than traditional monolithic applications. Here's how to do it effectively:

## 1. Contract Testing

Use tools like Pact to ensure service contracts are maintained:

\`\`\`typescript
const { Pact } = require('@pact-foundation/pact');

describe('User Service', () => {
  const provider = new Pact({
    consumer: 'UserService',
    provider: 'AuthService'
  });

  before(() => provider.setup());
  after(() => provider.finalize());

  it('should return user details', () => {
    return provider
      .addInteraction({
        state: 'user exists',
        uponReceiving: 'a request for user details',
        withRequest: {
          method: 'GET',
          path: '/api/users/123'
        },
        willRespondWith: {
          status: 200,
          body: {
            id: 123,
            name: 'John Doe'
          }
        }
      })
      .then(() => {
        // Test implementation
      });
  });
});
\`\`\`

## 2. Performance Testing

Use k6 for load testing your APIs:

\`\`\`javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function() {
  const res = http.get('http://api.example.com/users');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 200ms': (r) => r.timings.duration < 200
  });
  sleep(1);
}
\`\`\`

## 3. Security Testing

Implement security testing using OWASP ZAP:

\`\`\`bash
docker run -v $(pwd):/zap/wrk/:rw \
  -t owasp/zap2docker-stable zap-baseline.py \
  -t http://api.example.com \
  -g gen.conf \
  -r testreport.html
\`\`\`

## 4. Monitoring and Observability

Use tools like Prometheus and Grafana for monitoring:

\`\`\`yaml
# prometheus.yml
scrape_configs:
  - job_name: 'api-service'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['api-service:8080']
\`\`\`

By implementing these strategies, you'll have a robust API testing framework for your microservices architecture.`,
    date: "2024-03-10",
    author: "Your Name",
    tags: ["API Testing", "Microservices", "Performance", "Security"],
    imageUrl: "/blog/api-testing.jpg"
  }
]; 