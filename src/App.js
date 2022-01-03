import './App.css'; //css import

import { useSelector,useDispatch } from 'react-redux'; //redux imports
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index';
import { store } from './state/store';
import { ActionCreators } from 'redux-undo';

import List from '@mui/material/List'; //material ui imports
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function App() {


  //get initial values for 2 state properties
  const listValues = useSelector((state)=>state.list);
  const selectedIds = useSelector((state) =>state.selectedIds);

  const dispatch = useDispatch();
  //deconstruct all functions from our action creator
  const {addItem,
          removeItem,
          addSelectedIds,
          removeSelectedIds,
          resetSelectedIds,
          removeItemDblClick,
          selectAll,
          deselectAll
  } = bindActionCreators(actionCreators,dispatch);
  

  //handler function for adding new strings
  const addHandler = (e) => {
    let text = '';
    do{
      text = window.prompt("Please enter text:");
    } while(text === undefined || text === null || text === '');
    const newItem = { //create new object to be added to our state
      text:text,
      id: listValues.present.length === 0 ? 1 : Math.max(...listValues.present.map(value => value.id)) + 1
    }
    addItem(newItem);
  }


  //handler function for removing selected strings
  const removeHandler = (e) => {
    removeItem(selectedIds);
    resetSelectedIds(); //reset selected ids after deleting items
  }

  //aux variables
  let numClicks = 0;
  let singleClickTimer;

  //select handler with timeout to check for dblclick
  const selectHandler = (e) =>{
    const itemToSelectId = e.target.id ? parseInt(e.target.id) : parseInt(e.target.parentElement.id);
    numClicks++;
      if(numClicks === 1){
        singleClickTimer = setTimeout(()=>{
          numClicks = 0;
          //single click logic
          if(selectedIds.includes(itemToSelectId)){
              removeSelectedIds(itemToSelectId);
            }else{
              addSelectedIds(itemToSelectId);
            }
        },400);
      }else if(numClicks === 2){
        clearTimeout(singleClickTimer);
        numClicks = 0;
        //double click logic
        removeItemDblClick(itemToSelectId);
      }
  }

  //handler function for undo funcionalities
  const undoHandler = () =>{
    store.dispatch(ActionCreators.undo());
  }

  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper',maxHeight:350 }} className='listContainer'>
        <List className='stringsList'>
          {
            listValues.present.length > 0 ?
              listValues.present?.map((item) => 
              <ListItem  key={item.id} id={item.id} onClick={selectHandler} className={selectedIds.includes(item.id) ? 'selected' : ''}>
                <ListItemText id={item.id} primary={item.text}/>
              </ListItem>)
            :
              <div className='emptyDiv'>...Oops, looks like you haven't got any strings, try adding one</div>
          }
        </List>
      </Box>
      <Stack className='buttonStack' direction="row" spacing={3}>
          <Button variant="outlined" onClick={addHandler} size="small">+</Button>
          <Button variant="outlined" onClick={removeHandler} size="small">-</Button>
          <Button variant="outlined" onClick={undoHandler} size="small">Undo</Button>
      </Stack>

    </>
  );
}

export default App;
