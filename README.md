# Project Setup Guide

This guide will walk you through the steps to set up and run the application using Docker.

---

## Prerequisites

- [Git](https://git-scm.com/downloads) installed on your local machine
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed

---

## Step 1: Clone the GitHub Repository

Open your terminal or command prompt and run:

```bash
git clone https://github.com/thachoden/SIT725_ProjectT3
```

---

## Step 2: Switch to the `thac-docker` Branch

Navigate into the cloned repository folder:

```bash
cd replace-with-local-folder-path
```

Then switch to the `thac-docker` branch:

```bash
git checkout thac-docker
```

---

## Step 3: Run Docker Compose

Start the containers defined in the `docker-compose.yml` file:

```bash
docker compose up -d
```

This will build and run the application and its dependencies in detached mode.

---

## Step 4: Access Container Shell and Seed Data

Enter the application container shell:

```bash
docker exec -it GoPick-application sh
```

Inside the container, ensure you are on the app folder, run the seed script to populate initial data:

```bash
node config/seed.js
```

After seeding, you can exit the container shell by typing:

```bash
exit
```

---

## Step 5: Access the Application

Open your web browser and go to:

```
http://localhost:5000
```

You should see the application running.
All the data in the application is fetch from database. As long as the website shows everything such as cards with proper images, icons; this should means that all services in properly connected.

---

## Step 6: Testing URL

Keep your web browser open and go to these route to see if they return expected content:

- This flowing URL should return the home page:
```
http://localhost:5000
```

- This flowing URL should return my name and ID in json format:
```
http://localhost:5000/api/student
```
- This flowing URL should return the FAQs page:
```
http://localhost:5000/faq
```

### Test case:

You can view a product by:
1. Choosing a category card, all available products will be display.
2. Click on the product card, you should be redirected to the details prduct page.
--> If you able to perform these action, this indicated that all services in the app which include views, backend API, and databse have been properly dockerized.
---
## Troubleshooting

- If ports are already in use, stop conflicting services or change port mappings in `docker-compose.yml`.
- To stop and remove containers, run:

```bash
docker compose down
```

---

Feel free to reach out if you encounter any issues during setup!






