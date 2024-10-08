![start](public/documentation/gif.gif)

# GeoJSON Layer Test

This project is a **GeoJSON Layer Test** application built with Vite, React, shadcn/ui, TypeScript, and Redux. It allows users to add, update, and delete locations on a map, where the location data is managed using Redux. The project also includes instructions for interacting with the map through an intuitive user interface.

## Features

-   **Add** new locations by double-clicking on the map.
-   **Update** existing locations by editing their details.
-   **Delete** locations with a simple button click.
-   **React** with **TypeScript** for type safety and efficient development.
-   **Vite** as a fast build tool.
-   **Redux** for state management.
-   **shadcn/ui** for a clean and responsive UI.

## Table of Contents

-   [Installation](#installation)
-   [Running the Project](#running-the-project)
-   [Usage](#usage)
    -   [Add Location](#add-location)
    -   [Update Location](#update-location)
    -   [Delete Location](#delete-location)

## Installation

### Prerequisites

Before running the project, ensure that you have the following installed on your machine:

-   **Node.js** (v14 or later)
-   **npm** or **yarn**

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/geojson-layer-test.git
    cd geojson-layer-test
    ```

2. **Install dependencies**:
   Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Run the development server**:
   Using npm:

    ```bash
    npm run dev
    ```

    Or using yarn:

    ```bash
    yarn dev
    ```

4. Open your browser and navigate to:
    ```
    http://localhost:5173
    ```

## Usage

### Add Location

1. Open the map.
2. **Double-click** on the map where you want to place a new location.
3. A modal will appear. Fill in the necessary details

    ![add-form](public/documentation/add-form.png)

4. Click **Submit** to add the location. The new location will be displayed on the map.

    ![add-done](public/documentation/add-done.png)

### Update Location

1. Select the Information Card **Settings Icon** at left-bottom map.

    ![location-information](public/documentation/location-information.png)

2. In the form, update the details of an existing location.

    ![update](public/documentation/update.png)

3. Click **Submit** to save the changes.

### Delete Location

1. Select the Information Card **Settings Icon** at left-bottom map.
2. Update form will appear, Click **Delete** to remove the location from the map.
