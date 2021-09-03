import React from "react";

interface WithLoadingProps {
  loading: boolean;
}

function withLoader<P extends object>(Component: React.ComponentType<P>) {
  return class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...restProps } = this.props;
      return loading ? <LoadingSpinner /> : <Component {...(restProps as P)} />;
    }
  };
}

export default withLoader;

const LoadingSpinner = () => <h2>Loading ...</h2>;
