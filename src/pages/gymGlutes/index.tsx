import React, {FC, useEffect} from 'react'
import User from '../user'
import { useExercises } from '../../providers/exercise';
import Title from 'antd/lib/typography/Title';
import { Card } from 'antd';
import styles from './styles.module.scss'
import { DeleteOutlined, EditOutlined, StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { useUser } from '../../providers/users';


const GymGlutes:FC = () => {
  
    const { getExercise, ExerciseFound, createFavouriteExercise } = useExercises();
    const {UserInfo} = useUser();
    
    useEffect(() => {
      getExercise();
      console.log(UserInfo);
    }, [])
  
    const getFavourite = (exerciseId: string) => {
      let Favourite = {
        userId: UserInfo?.id,
        exerciseId: exerciseId 
      }
      console.log('favourite', Favourite);
      createFavouriteExercise(Favourite);
    }

  
   const exercises = ExerciseFound?.filter(ex => 
      ex.location == 2 && ex.bodyTarget == 3 && ex.intensity == 1 );
      const advExercises = ExerciseFound?.filter(ex => 
        ex.location == 2 && ex.bodyTarget == 3 && ex.intensity == 2 );
    
  
    
    return (
      <>
      <User>
      <Title>Glute Exercises </Title>
      <h1>Gym Edition</h1>
      <Title>Beginner Level</Title>
    <div className={styles.videoDiv}>
            {exercises?.map((exercise) => (
              <Card
    style={{ width: 400 }}
    cover={
        <iframe
        src = {`https://www.youtube.com/embed/${exercise.link}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        height="300px"
        width="300px"
        allowFullScreen
        title={exercise.name}
      />
    }
    actions={[
      <StarOutlined key="favourite" onClick={ () => getFavourite(exercise.id)}/>,
    ]}
  >
    <Meta
      
      title={exercise.name}
      description={exercise.description}
    />
  </Card>    
      ))}
        </div>  

        <Title>Advanced Level</Title>
    <div className={styles.videoDiv}>
            {advExercises?.map((exercise) => (
              <Card
    style={{ width: 400 }}
    cover={
        <iframe
        src = {`https://www.youtube.com/embed/${exercise.link}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        height="300px"
        width="300px"
        allowFullScreen
        title={exercise.name}
      />
    }
    actions={[
      <StarOutlined key="favourite" onClick={ () => getFavourite(exercise.id)}/>,
    ]}
  >
    <Meta
      
      title={exercise.name}
      description={exercise.description}
    />
  </Card>    
      ))}
        </div>  
      </User>
      </>
    )
  }
  
  export default GymGlutes;
  