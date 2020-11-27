import React,{useEffect} from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {Link, Separator,Title,Text, Panel,PanelHeader,TabsItem,Tabs} from '@vkontakte/vkui';
import axios from 'axios'
import json from 'json-schema'
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24ChevronRight from '@vkontakte/icons/dist/24/chevron_right';
const styles = {
	h1: {
		textAlign:"center",
	},
	a:{
		marginBottom: 10,
	},
	icon:{
		marginRight:"1rem",
		color:"#3F8AE0",
		position:"absolute",
		right:"0",
		top:"0"
	}
}
const Main = (props) => {

    const [activeTab,setActiveTab] = React.useState("news");

  
    try{
        //console.log(props.fetchedPost)
        // // props.fetchedPost - объект с постами
        // //const post = JSON.parse(props.fetchedPost);
        // console.log(props.fetchedPost.response.items[0].text);
        // console.log(props.fetchedPost.response.items[0].attachments[0].link.photo);
        
        return(
            <Panel id={props.id}>
                <PanelHeader>Новости</PanelHeader>
                <Tabs>
                    <TabsItem
                        onClick={() => {
                        setActiveTab('news')
                            }}
                        selected={activeTab === 'news'}>СМИ</TabsItem>
                    <TabsItem  onClick={() => {setActiveTab('changes')}}
                    selected={activeTab === 'changes'}>Изменения</TabsItem>
                </Tabs>
                <div style={{display:'inline-block',justifyContent:'center',alignItems:'center'}}>
                    {props.fetchedPost.response.items.map((post,index)=>{
                        
                        if(post.text.includes("#новости") && activeTab==='news'){
                            return (
                                <Link href={post.attachments[0].link.url}>
                                <Div style={{textAlign:'center'}}>
                                    <div><img style={{borderRadius:'1rem 1rem 0rem 0rem',width:'21.5rem'}} src={post.attachments[0].link.photo.sizes[8].url}></img></div>
                                    
                                    <div style={{color:'black',boxShadow: '0 0 10px rgba(0,0,0,0.5)',padding: '0.6rem',textAlign:'center',borderRadius:'0rem 0rem 1rem 1rem',marginTop:'-0.2rem',width:'20.3rem'}}>
                                        <Title level="3" weight="semibold" >{post.text.replace('↵',' ')}</Title>    
                                    </div>
                                </Div>
                                </Link>
                            )
                        }else if(post.text.includes("#налоговыеизменения") && activeTab==='changes'){
                            return (
                                <Div style={{boxShadow: '0 0 0.1rem rgba(0,0,0,0.5)',padding: '0.6rem',borderRadius:'0.5rem',width:'20.3rem',marginLeft:'0.5rem',marginTop:'0.5rem'}}>
                                    <Title>Категория</Title>
                                    <Text style={{color:"#818C99"}}>с 1 Января 2020</Text>
                                    <div style={{display:'flex'}}>
                                        
                                        <Title level="3" weight="semibold" >{post.text.replace('↵','<br>')}</Title>   
                                        <Link href={post.attachments[0].link.url}><Icon24ChevronRight></Icon24ChevronRight></Link>
                                    </div>
                                </Div>
                            )
                        }
                        
                        
                    })}
                </div>
                <div style={{marginTop:'4.5rem'}}></div>
            </Panel>
        );
    }catch(err){
        console.log(err)
        return(
            <Panel id={props.id}>
                <PanelHeader>Новости</PanelHeader>
                <Text style={{display:'flex',color:"#EE6B70",justifyContent:"center",alignItems:"center",fontSize:"3rem",marginTop:"2.5rem"}}>Error :'c</Text>
            </Panel>
        )
    }
}

export default Main;