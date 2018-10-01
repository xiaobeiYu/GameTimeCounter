import { bindActionCreators } from "redux";

export const mapStateToProps = (state) => (
    {
        data: {
            ...state,
        },
    }
);

export const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        startCounting,
        endCounting,
    }, dispatch),
});

export default connect(mapDispatchToProps, mapStateToProps)(itemDetailsComponent)