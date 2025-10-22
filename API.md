# API Documentation (Future)

## Overview

This document outlines the planned API for AltruisticXAI. The API will enable:
- Integration with external services
- Team and enterprise features
- Third-party plugin development
- Mobile app support

**Current Status**: Not yet implemented. This serves as the specification for future development.

## Base URL

```
Production: https://api.altruisticxai.com/v1
Staging: https://api-staging.altruisticxai.com/v1
```

## Authentication

### API Key Authentication

```http
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0 (Future)

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Rate Limiting

- **Free Tier**: 100 requests/hour
- **Team Tier**: 1,000 requests/hour
- **Enterprise**: Custom limits

Response headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1640995200
```

## Endpoints

### Reflections

#### Create Reflection

```http
POST /reflections
```

**Request Body:**
```json
{
  "input": "I'm deciding between two job offers",
  "context": {
    "category": "career",
    "urgency": "high"
  }
}
```

**Response:**
```json
{
  "id": "refl_abc123",
  "script": {
    "id": "work-career-path",
    "question": "Do you prioritize immediate growth or long-term stability?",
    "optionA": {
      "label": "Growth Now",
      "description": "Take the high-risk, high-reward path"
    },
    "optionB": {
      "label": "Stability First",
      "description": "Choose the secure, predictable option"
    }
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": "pending"
}
```

#### Submit Choice

```http
POST /reflections/:id/choice
```

**Request Body:**
```json
{
  "choice": "optionA"
}
```

**Response:**
```json
{
  "id": "refl_abc123",
  "choice": "optionA",
  "reflection": {
    "valuesUpheld": ["Growth", "Risk-taking", "Ambition"],
    "valuesStrained": ["Security", "Predictability"],
    "ripple": "Choosing growth now may accelerate your career but requires comfort with uncertainty...",
    "confidence": 0.89
  },
  "status": "completed",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

#### List Reflections

```http
GET /reflections?limit=20&offset=0&category=work
```

**Response:**
```json
{
  "data": [
    {
      "id": "refl_abc123",
      "category": "work",
      "timestamp": "2024-01-15T10:30:00Z",
      "status": "completed"
    }
  ],
  "pagination": {
    "total": 45,
    "limit": 20,
    "offset": 0,
    "hasMore": true
  }
}
```

#### Get Reflection

```http
GET /reflections/:id
```

**Response:**
```json
{
  "id": "refl_abc123",
  "script": { /* full script object */ },
  "choice": "optionA",
  "reflection": { /* full reflection object */ },
  "timestamp": "2024-01-15T10:30:00Z",
  "metadata": {
    "processingMode": "cloud",
    "duration": 2.3,
    "source": "web"
  }
}
```

#### Delete Reflection

```http
DELETE /reflections/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Reflection deleted successfully"
}
```

### Scripts

#### List Scripts

```http
GET /scripts?category=work&limit=10
```

**Response:**
```json
{
  "data": [
    {
      "id": "work-speed-accuracy",
      "category": "work",
      "question": "Do you prioritize speed or accuracy today?",
      "tags": ["productivity", "quality"],
      "popularity": 0.85
    }
  ]
}
```

#### Get Script

```http
GET /scripts/:id
```

**Response:**
```json
{
  "id": "work-speed-accuracy",
  "category": "work",
  "question": "Do you prioritize speed or accuracy today?",
  "optionA": { /* full option object */ },
  "optionB": { /* full option object */ },
  "reflections": { /* reflection templates */ }
}
```

### LLM Integration

#### Generate Dynamic Reflection

```http
POST /llm/generate
```

**Request Body:**
```json
{
  "input": "I'm deciding whether to speak up in a meeting",
  "userValues": ["authenticity", "collaboration"],
  "processingMode": "cloud"
}
```

**Response:**
```json
{
  "script": {
    "question": "In this meeting, do you share your perspective or observe first?",
    "optionA": {
      "label": "Speak Up",
      "description": "Share your thoughts authentically"
    },
    "optionB": {
      "label": "Listen First",
      "description": "Observe before contributing"
    }
  },
  "processingTime": 1.2,
  "model": "gpt-4"
}
```

### User Management

#### Get User Profile

```http
GET /user/profile
```

**Response:**
```json
{
  "id": "user_xyz789",
  "email": "user@example.com",
  "values": ["growth", "authenticity", "balance"],
  "settings": {
    "processingMode": "cloud",
    "dataRetention": true
  },
  "subscription": {
    "tier": "team",
    "expiresAt": "2024-12-31T23:59:59Z"
  }
}
```

#### Update User Settings

```http
PATCH /user/settings
```

**Request Body:**
```json
{
  "processingMode": "local",
  "dataRetention": false
}
```

### Data Export

#### Export User Data

```http
POST /export
```

**Response:**
```json
{
  "exportId": "exp_def456",
  "status": "processing",
  "estimatedTime": 30
}
```

#### Check Export Status

```http
GET /export/:exportId
```

**Response:**
```json
{
  "exportId": "exp_def456",
  "status": "completed",
  "downloadUrl": "https://cdn.altruisticxai.com/exports/exp_def456.json",
  "expiresAt": "2024-01-16T10:30:00Z"
}
```

### Analytics (Team & Enterprise)

#### Get Reflection Analytics

```http
GET /analytics/reflections?period=30d
```

**Response:**
```json
{
  "period": "30d",
  "totalReflections": 156,
  "byCategory": {
    "work": 45,
    "health": 32,
    "personal": 79
  },
  "topValues": [
    { "value": "balance", "count": 42 },
    { "value": "growth", "count": 38 }
  ],
  "trends": {
    "daily": [ /* array of daily counts */ ]
  }
}
```

## Webhooks (Enterprise)

### Register Webhook

```http
POST /webhooks
```

**Request Body:**
```json
{
  "url": "https://your-app.com/webhook",
  "events": ["reflection.completed", "reflection.deleted"],
  "secret": "your_webhook_secret"
}
```

### Webhook Payload

```json
{
  "event": "reflection.completed",
  "timestamp": "2024-01-15T10:32:00Z",
  "data": {
    "id": "refl_abc123",
    "userId": "user_xyz789",
    "category": "work"
  }
}
```

## Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "The provided input is invalid",
    "details": {
      "field": "choice",
      "reason": "Must be either 'optionA' or 'optionB'"
    }
  }
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `INVALID_INPUT` | 400 | Invalid request data |
| `UNAUTHORIZED` | 401 | Missing or invalid authentication |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |
| `SERVICE_UNAVAILABLE` | 503 | Temporary service issue |

## SDKs

### JavaScript/Node.js

```javascript
import { AltruisticXAI } from '@altruisticxai/sdk';

const client = new AltruisticXAI({
  apiKey: 'your_api_key'
});

// Create reflection
const reflection = await client.reflections.create({
  input: "I'm deciding between two options"
});

// Submit choice
const result = await client.reflections.submitChoice(
  reflection.id,
  'optionA'
);
```

### Python

```python
from altruisticxai import Client

client = Client(api_key='your_api_key')

# Create reflection
reflection = client.reflections.create(
    input="I'm deciding between two options"
)

# Submit choice
result = client.reflections.submit_choice(
    reflection.id,
    'optionA'
)
```

## Integration Examples

### Slack Bot

```javascript
// Slash command: /reflect
app.command('/reflect', async ({ command, ack, respond }) => {
  await ack();
  
  const reflection = await altruisticxai.reflections.create({
    input: command.text
  });
  
  await respond({
    text: reflection.script.question,
    blocks: [/* interactive buttons */]
  });
});
```

### Notion Integration

```javascript
// Add reflection to Notion database
const result = await client.reflections.submitChoice(id, choice);

await notion.pages.create({
  parent: { database_id: 'your_db_id' },
  properties: {
    Title: { title: [{ text: { content: result.script.question } }] },
    Choice: { select: { name: result.choice } },
    Values: { multi_select: result.reflection.valuesUpheld.map(v => ({ name: v })) }
  }
});
```

## Privacy & Compliance

### Data Handling
- All API requests use HTTPS
- Personal data is encrypted at rest
- Data retention follows user preferences
- GDPR-compliant data export and deletion

### Anonymization
When sharing anonymized data (with consent):
- User IDs are hashed
- Timestamps are randomized within 24-hour windows
- Location data is generalized to country level

---

**Note**: This API is under active development. Breaking changes may occur before v1.0 release. 

For questions or early access, contact: api@altruisticxai.com
