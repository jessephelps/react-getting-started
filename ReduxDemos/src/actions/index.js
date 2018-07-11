export function fetchProjects() {
  return async (dispatch) => {
    dispatch(projectsIsLoading(true));

    fetch('/api/v1/projects')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(projects => dispatch(projectsFetchDataSuccess(projects)))
      .catch(() => dispatch(projectsHasErrored(true)));
  };
}