import { connect } from "react-redux";
import { countFunc, updateProducts } from "./reduxModule";


function Count(props){
    let {countFunc, updateProducts} = props;  
    const addProducts = () => {
        let obj = {
            id: 2,
            name: "Mới thêm"
        }; 

        updateProducts(obj);
    }
    return (
        <div>
            <h1> Hello {props.count} </h1>
            <h1>{props.a}</h1>

            {
                props.products.map(x => 
                    <h1>{x.name}</h1>
                    )
            }   
            <button onClick={() => countFunc(1)}> Counter Func </button>
            <button onClick={addProducts}> Thêm mới products</button>
        </div>
    )
}

const mapStateToProps = state => ({count: state.counter, a: "test", products: state.products});  
const mapDispatchToProps = { countFunc, updateProducts };  
export default connect(mapStateToProps, mapDispatchToProps)(Count);


// khai báo store 
// sử dụng dữ liệu trong store
// tác động vào store