import { withAuth } from "../../src/components/commons/hocs/withAuth";
import RundayCourse from "../../src/components/units/RundayCourse/RundayCourseContainer";

const RundayCoursePage = () => {
  return <RundayCourse />;
};

export default withAuth(RundayCoursePage);
