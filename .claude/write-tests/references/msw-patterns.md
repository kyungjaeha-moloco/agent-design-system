# MSW Patterns — Mock Service Worker 설정 가이드

## MSW 서버 설정

```tsx
// src/test/msw/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const server = setupServer(...handlers);
```

## 핸들러 패턴

```tsx
// src/test/msw/handlers.ts
import { http, HttpResponse } from 'msw';

const mockOrders = [
  { id: '1', name: 'Test Order', status: 'ACTIVE', budget: { amount: '1000' } },
  { id: '2', name: 'Order 2', status: 'PAUSED', budget: { amount: '2000' } },
];

export const handlers = [
  http.get('/api/orders', () => {
    return HttpResponse.json({ items: mockOrders, totalCount: 2 });
  }),
  http.get('/api/orders/:id', ({ params }) => {
    const order = mockOrders.find(o => o.id === params.id);
    if (!order) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(order);
  }),
  http.post('/api/orders', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ ...body, id: 'new-id' }, { status: 201 });
  }),
  http.put('/api/orders/:id', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body);
  }),
];
```

## 에러 시뮬레이션

```tsx
import { server } from '../test/msw/server';
import { http, HttpResponse } from 'msw';

it('handles API error', async () => {
  server.use(
    http.get('/api/orders', () => new HttpResponse(null, { status: 500 }))
  );
});
```

## Vitest 통합

```tsx
// src/test/setup.ts에 추가
import { server } from './msw/server';
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

## 응답 형식

- List: `{ items: T[], totalCount: number }`
- Detail: 단일 엔티티 객체
- Create/Update: 요청 본문 + 생성된 ID
- Error: `{ error: { code: string, message: string } }`
