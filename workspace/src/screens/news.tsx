import React from 'react';
import { Link, RouteComponentProps,} from 'react-router-dom';

interface IProps extends RouteComponentProps<{tit: string}> {

}

export default class News extends React.Component<IProps,{}> {
    
 
    render(){
        return(
            <div>
                <Link to={`/news/${'cxzc'}`}>dsadsadas</Link>
            </div>
        )
    }
}