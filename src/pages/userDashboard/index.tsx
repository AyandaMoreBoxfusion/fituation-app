import Title from 'antd/lib/typography/Title';
import React, { FC, useEffect, useState } from 'react'
import Link  from 'next/link';
import styles from './styles.module.scss'
import User from '../user';
import { useUser } from '../../providers/users';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import {useRouter} from 'next/router';
import { useExercises } from '../../providers/exercise';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const UserDashboard: FC = () => {
    const {UserInfo, getUserRole}=useUser();
    const { getExercise, ExerciseFound, createFavouriteExercise, fetchFavouriteExercise, favouriteExerciseFound } = useExercises();
    const {push}=useRouter();
      const userDetails = UserInfo;
      //var favVideos;
    

    useEffect(() => {
     getExercise();
     fetchFavouriteExercise(userDetails?.id);
     })

     console.log('dashfav', favouriteExerciseFound)

     
     let favVideos: Array<Object>;
     //var length = favouriteExerciseFound.length;
    
       var videos = ExerciseFound?.filter(ex => ex.id == favouriteExerciseFound?.exerciseId);
    
     favVideos?.push(videos);
    


    //const exercises = ExerciseFound?.filter(ex => 
    //ex.location == 1 && ex.bodyTarget == 2 && ex.intensity == 1);

     console.log('favVidsData',favVideos)


  return (
      <>
      <User>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Title> Hello, {userDetails?.name} ! You've: </Title>
              <div className={styles.statsContainer}>
              <div className={styles.stats}>
        <img className={styles.pic} src="https://img.icons8.com/external-becris-lineal-color-becris/344/external-calories-ketogenic-diet-becris-lineal-color-becris.png" />
          <Title level={4}>Burned 110 Calories</Title>
        </div>

        <div className={styles.stats}>
          <img className={styles.pic} src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-exercise-working-stress-flaticons-flat-flat-icons-2.png" />
        <Title level={4}>Watched 3 Workout Videos</Title>
        </div>
      </div>
      
            </div>
            <Title> Here's some of your favourite videos: </Title>
            <div className={styles.videoDiv}>
            {videos?.map((exercise: any) => (
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

export default UserDashboard;
