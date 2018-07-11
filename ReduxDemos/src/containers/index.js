import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProjects, updateProject } from '../actions';
import Loading from '../components/loading';
import ProjectTabs from '../components/project';
import { addImage } from '../actions/images';

class Project extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />;
    } else if (this.props.project) {
      return <ProjectTabs {...this.props} />;
    }
    // TODO: This should not happen! Log this!
    return <div>Project not found</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects.items.find(p => p.id === ownProps.match.params.projectId),
    isLoading: state.projects.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNextQuote: () => {
    dispatch(fetchNextQuote());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);

Project.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  project: PropTypes.shape({}),
  fetchProjects: PropTypes.func.isRequired,
};

Project.defaultProps = {
  project: null,
};