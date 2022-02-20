import Info from "../info";
import Title from "../title";

const InformationUi = ({className, title_text}) => {
    return (
        <div className={className}>
            <Title title_text={title_text}/>
            <Info/>
        </div>
    )
}

export default InformationUi;