# React Mind Graph Application

The motivation behind this app is to get rid of old sticky notes and tree like mind-maps. Based on the recent scientific studies, for instance [Researchers uncover how the human brain separates, stores, and retrieves memories](https://www.nih.gov/news-events/news-releases/researchers-uncover-how-human-brain-separates-stores-retrieves-memories) and [Connectome: Graph theory application in functional brain network architecture](https://www.sciencedirect.com/science/article/pii/S2467981X17300276) from NIH and Brain Connectivity Laboratory, IRCCS San Raffaele Pisana, Rome, Italy respectively, there is an intrinsic link between graph theory and real functional brain network architecture. 

## Benefits of organizing topics in graph like structure:
1. It can reduce the analytical brain complexity and highlight the key aspects of network topology, such as integration, segregation, and modularity.
2. It can provide a common theoretical framework and a general language to understand the association of various pathological processes in the brain.
3. It can enable an online view on brain dynamics and variability, and capture the temporal evolution of network states.
4. It can be combined with other neuroimaging techniques, such as MRI, to obtain a more comprehensive picture of brain structure and function.

## Comparison analysis with sticky notes:

1. Graphs allow linking related notes. 
    - Graphs can show the connections between different notes by using links, which can help you find, collect, and organize related ideas. Sticky notes are isolated and can only be grouped by physical proximity or color, which limits the complexity and richness of the associations
2. Graphs enable visualizing the structure of your notes.
    - Graphs can display the relationships between your notes in a visually engaging and interactive way, which can help you find hidden patterns, gaps, and insights in your thinking. Sticky notes are static and can only show a flat and linear structure of your notes, which can obscure the underlying logic and hierarchy of your thoughts.
3. Graphs support flexible and dynamic note-taking.
    - Graphs can adapt to your personal workflow and preferences, as you can customize the style, layout, and format of your notes. You can also use plugins and apps to enhance the functionality and interactivity of your notes. Sticky notes are rigid and fixed, as you can only write or draw on them with limited space and tools. You cannot easily edit, rearrange, or expand your notes without creating a mess.

## Conclusions
Therefore storing topics in form of graph exceeds just form of storing the data but is a powerful tool in improving your learning abilities and brain health, unveiling representation of underline brain structure.


## Features

- Add graph edge
- Remove graph edge
- Delete graph node
- Clear graph data
- Save graph
- Load graph

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm

## Installing and Running the App

To install and run the app, follow these steps:

1. Clone the repository:
```git clone https://github.com/AndriiPrikhodko/graph-topics.git```
2. Navigate to the project directory:
```cd graph-topics```
3. Install the dependencies:
```npm ci```
4. Start the app:
```npm run start```

## Setup MSW Mocks

To setup msw mocks, use this command:

```npm run initialize-msw```

To start app with mocks, use this command:

```npm run start:mock```

## Running Storybook
Make sure mocks have been initialized.

To run storybook, use following command:
```npm run storybook```

## Running storybook component tests
#### Prerequisites: 
Make sure mocks have been initialized.
Install playwright, with command
```npx playwright install```
#### Run tests
Run component tests with following command:
```npm run test:component```

## Running Unit Tests

To run unit tests, use this command:

```npm test```


## Docker Building the App

Build docker image

```docker build -t app-prod .```

To run the app for production in docker, use this command:

```docker run -p 80:80 --name app-prod app-prod```

## Contact

If you want to contact me, you can reach me at `prykhodkoaa@gmail.com`.

## License

This project uses the following license: CC BY-NC 4.0.
