import styles from './Item.module.scss';
import { useAppSelector } from '@redux/hooks/useRedux';
import { IPrice } from '@redux/types/prices';

import Editing from './Editing';
import Content from './Content';
import UseContext from './useContext';

const Item = ({data, index}: {data: IPrice, index: number}) => {

    return (
      <UseContext data={data} index={index}>
        <div className={styles.container}>

          <div className={styles.content}>
              <Content />
          </div>

          <div className={styles.editing}>
              <Editing />
          </div>

        </div>    
      </UseContext>
    )
}

const ItemsWrapper = () => {

  const {prices} = useAppSelector(state => state.admin);

  return ( !prices ? null : <> {prices.map((el, index) => <Item data={el} key={el._id} index={index} /> )}</>)
}

export default ItemsWrapper