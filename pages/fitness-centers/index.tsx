import { withAuth } from "../../src/components/commons/hocs/withAuth";
import FitnessCenters from "../../src/components/units/FitnessCenters/FitnessCentersContainer";

const FitnessCentersPage = () => {

    return <FitnessCenters />
}

export default withAuth(FitnessCentersPage);