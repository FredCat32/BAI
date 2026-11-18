import Anthropic from '@anthropic-ai/sdk';

let client = null;

function getClient() {
  if (!client) {
    client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }
  return client;
}

export async function generateChatResponse(messages, systemPrompt) {
  const anthropicClient = getClient();
  try {
    const response = await anthropicClient.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      temperature: 0.7,
      system: systemPrompt,
      messages: messages
    });

    return {
      content: response.content[0].text,
      usage: {
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens
      }
    };
  } catch (error) {
    console.error('Anthropic API error:', error);

    if (error.status === 429) {
      throw new Error('API rate limit exceeded. Please try again in a moment.');
    } else if (error.status === 401) {
      throw new Error('API authentication failed. Please contact support.');
    } else {
      throw new Error('Failed to generate response. Please try again.');
    }
  }
}
