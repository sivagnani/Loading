import * as React from 'react';
import { IPaginationProps } from './IPaginationProps';
import { getItems } from '../services/service';
import { IPaginationState } from './IPaginationState';
import { listItems } from '../model/model';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
export default class Page extends React.Component<IPaginationProps,IPaginationState> {
  constructor(props:IPaginationProps){
    super(props)
    this.state={
      pageItems:[],
      loading:false,
      isButtonClicked:false,
    }
  }
  retrieveItems(){
    console.log("clicked");
    this.setState({
      isButtonClicked:true,
      loading:true
    });
    getItems().then((items:listItems[])=>{
      this.setState({
        loading:false,
        pageItems:items
      })
    })

  }
  public render(): React.ReactElement<IPaginationProps> {
    return (
      <div>
        {
          !this.state.loading &&<button onClick={()=>this.retrieveItems()}>Get Items</button>
        }
        {
          this.state.isButtonClicked &&
        (
          this.state.loading
          ?
          <Spinner label="Loading items from list....." size={SpinnerSize.large} />
          :
          this.state.pageItems.map((item:listItems)=><div>{item.Title}</div>)
        )
      }
        </div>
      );
  }
}
