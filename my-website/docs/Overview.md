---
sidebar_label: 'Overview'
sidebar_position: 1
---
# Tres Finance API Quickstart Guide  

Welcome to the **Tres Finance API Quickstart Guide**!  
This guide will help you get started with our API, which provides numerous endpoints for querying and manipulating data related to your organization.  

## 1. About Tres Finance API  

The **Tres Finance API** offers a comprehensive set of endpoints to interact with your organization's data.  
Whether you need to:  
- Retrieve financial information  
- Manage users  
- Perform other administrative tasks  

Our API has you covered.  

## 2. GraphQL Support  

Our API supports **GraphQL**, a powerful query language for your API.  
With GraphQL, you can:  
- Precisely specify the data you need  
- Minimize over-fetching and under-fetching of data  

For more details, check out our **GraphQL Guide**.  

## 3. Finding the Right Endpoint  

Navigating through our API is easy using the menu and directory structure:  

- 📂 Explore available endpoints in the API documentation  
- 📌 Organized by categories such as **Transaction**, **Staking Data**, and more  
- 🔍 Drill down into specific endpoints for details and usage instructions  

## 4. Authentication  

🔐 **Authentication is required** for all requests to the Tres Finance API.  

To authenticate your requests:  
1. Obtain an **access key** by logging into your organization's account using the login endpoint.  
2. Store the key **securely** in your environment variables.  
3. Include the access key in your API requests **inside the headers**.  

Example:  
```http
Authorization: Bearer YOUR_ACCESS_KEY
```

## Base URL

The base URL for the Tres Finance API is:

```http
https://api.prod.tres.finance
```

We hope this guide helps you get started with the Tres Finance API. If you have any questions or need further assistance, don't hesitate to reach out to our support team.
Happy coding!
Tres Finance Team
