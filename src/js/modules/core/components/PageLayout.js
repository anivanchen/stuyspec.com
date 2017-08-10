import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import injectSheet from "react-jss";

import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import { getTopLevelSectionsWithDirectChildren } from "../../sections/selectors";

const styles = {
  PageContainer: {
    margin: '0 auto',
    width: '1060px',
  }
};

const PageLayout = ({ classes, children, location, topLevelSectionsWithDirectChildren }) => {
  return (
    <div>
      <PageHeader location={location}
                  topLevelSectionsWithDirectChildren={topLevelSectionsWithDirectChildren}/>
      <div className={classes.PageContainer}>
        {children}
      </div>
      <PageFooter topLevelSectionsWithDirectChildren={topLevelSectionsWithDirectChildren}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  topLevelSectionsWithDirectChildren: getTopLevelSectionsWithDirectChildren(state),
});

export default withRouter(
  connect(mapStateToProps)
  (injectSheet(styles)(PageLayout))
);