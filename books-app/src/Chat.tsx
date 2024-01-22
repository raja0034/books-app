import React, { useState } from 'react';

const Chat = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://oai-ravinote-3.openai.azure.com/openai/deployments/key-ravinote-3/chat/completions?api-version=2023-07-01-preview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '', // specify api key here
                    'deployment-id': 'key-ravinote-3'
                },
                body: JSON.stringify({"messages":[{"role": "user", "content": query}]}),
            });
            const data = await response.json();
            setResponse(data.choices[0].message.content);
        } catch (error) {
            setResponse('Something went wrong. 429: Too many requests. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>AskRavi</h1>
            <h2> What would you like to know? This search covers all his writings.</h2>
            <form onSubmit={handleSubmit}>
                <input id="query" type="text" width="50%" value={query} onChange={handleQueryChange} />
                <button type="submit">Send</button>
            </form>
            <div>{response}</div>
        </div>
    );
};

export default Chat;

