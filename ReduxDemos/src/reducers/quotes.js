const initialState = {
  items: [],
};

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_IMAGE_SUCCESS':
      return {
        ...state,
        items: state.items.map((project) => {
          if (project.id === action.projectId) {
            return { ...project, images: project.images.concat([action.image]) };
          }
          return project;
        }),
      };
    default:
      return state;
  }
};

export default projects;