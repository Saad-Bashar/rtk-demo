Redux toolkit query is a game changer, especially for devs who are so used to redux. There is a vast amount of projects in react/react-native that are still using the old redux and a lot of the projects are trying to migrate to the new redux toolkit and redux toolkit query. In this tutorial, we will learn in detail how to use redux toolkit query to simplify our data fetching and cache management.

I have another article that explains the redux toolkit concept. Please find it below link - 
Getting Started with Redux in React Native
Redux is one of the most used state management libraries in React and React Native. In this article, we will learn how…www.notjust.dev
Let's start then! As always we will be taking a small demo project to learn the topic. What's a better project out there than to build a "Todo App"? 
There are two main areas that we will be covering here.
CRUD (Create, Read, Update, Delete) operations with RTKQ
Handling caches with RTKQ.

Boilerplate
I have created a starter template that you can download and follow the tutorial accordingly. The starter template lives on the 'starter' branch.
GitHub - Saad-Bashar/rtk-demo at starter
learn rtkq with rn. Contribute to Saad-Bashar/rtk-demo development by creating an account on GitHub.github.com
The starter template has the following functionalities.
Navigation setup: List Screen, Add Screen. View Screen and Edit Screen. Each screen is set up with dummy data.
Redux Store setup: The project is set up with redux-toolkit. It still does not have rtk-query. We will set that up soon.

Before we jump into the implementation, let's first specify the functionalities that we want from our to-do app. The use cases are the following:

1. List Screen  -  We want to fetch and show all the to-do items. Each to-do item is displayed within a card view and we also have a delete functionality on each card. Upon deleting an item, the list refreshes and we get the refreshed list without the deleted items.

2. Add Screen  -  We want to add a new to-do item. Upon adding a new item, we want to navigate back to the list screen and see the newly added item in the list.

3. View Screen  -  We want to view a single to-do item. We also want to have an edit button that will take us to the edit screen. At the same time in our view screen we have a "Mark as complete / incomplete" button. When we hit the button we would like to see the updated screen at the same time inside the view screen.

4. Edit Screen  - Inside the edit screen we want to edit the to-do item. Once the item is edited, the item inside view screen and the list screen should be simultaneously updated.
