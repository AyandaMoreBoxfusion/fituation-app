import React, {FC, useEffect, useState} from 'react'
import User from '../user'
import { useExercises } from '../../providers/exercise';
import Title from 'antd/lib/typography/Title';
import { IExercise } from '../../providers/exercise/context';
import { Button, Card, Carousel } from 'antd';
import styles from './styles.module.scss'
import { DeleteOutlined, EditOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { useUser } from '../../providers/users';


const HomeUpperBody:FC = () => {
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
      ex.location == 1 && ex.bodyTarget == 5 && ex.intensity == 1 );
    
      const advExercises = ExerciseFound?.filter(ex => 
        ex.location == 1 && ex.bodyTarget == 5 && ex.intensity == 2);
  
  
    
    return (
      <>
      <User>
      <Title>Upper Body Exercises: </Title>
      <h1>Home Edition</h1>
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
      <StarOutlined key="favourite" onClick={ () => getFavourite(exercise.id)}/>
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
      <StarOutlined key="favourite" onClick={ () => getFavourite(exercise.id)}/>
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
  
  export default HomeUpperBody;
  