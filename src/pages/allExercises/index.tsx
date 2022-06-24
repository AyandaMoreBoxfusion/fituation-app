import React, {FC, useEffect} from 'react'
import { useExercises } from '../../providers/exercise';
import Title from 'antd/lib/typography/Title';
import { Carousel } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Admin from '../admin';
import styles from './styles.module.scss'

const { Meta } = Card;
const contentStyle: React.CSSProperties = {
    height: '500px',
    color: '#fff',
    lineHeight: '360px',
    textAlign: 'center',
    background: '#364d79',
    display: 'flex',
    flexDirection: 'row'
  };

  
const GymAbs:FC = () => {
    const { getExercise, ExerciseFound } = useExercises();
  
    useEffect(() => {
      getExercise();
   
    }, [])
    console.log('real exercise',ExerciseFound);
   //ab exercise
   const abExercises = ExerciseFound?.filter(ex => 
    ex.bodyTarget == 2);
    //full body exercise
    const fullBodyExercises = ExerciseFound?.filter(ex => 
       ex.bodyTarget == 1);
    //glute exercises
    const gluteExercises = ExerciseFound?.filter(ex => 
       ex.bodyTarget == 3);
    //leg exercises
    const legExercises = ExerciseFound?.filter(ex => 
      ex.bodyTarget == 4);
    //upper body exercises
    const upperBodyExercises = ExerciseFound?.filter(ex => 
      ex.bodyTarget == 5);  
    
    return (
      <>
      <Admin>
      <Title>Abs</Title>
       <div className={styles.videoDiv}>
            {abExercises?.map((exercise) => (
              <Card
    style={{ minWidth: 480, padding: 25, margin: 20 }}
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
        <DeleteOutlined key="delete"/>,
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={exercise.name}
      description={exercise.description}
    />
  </Card>   
      ))}
        </div>
        <Title>Full Body</Title>
       <div className={styles.videoDiv}>
            {fullBodyExercises?.map((exercise) => (
              <Card
    style={{ minWidth: 480, padding: 25, margin: 20, justifyContent: 'center' }}
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
        <DeleteOutlined key="delete"/>,
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={exercise.name}
      description={exercise.description}
    />
  </Card>   
      ))}
        </div> 
        <Title>Glutes</Title>
       <div className={styles.videoDiv}>
            {gluteExercises?.map((exercise) => (
              <Card
    style={{ minWidth: 480, padding: 25, margin: 20 }}
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
        <DeleteOutlined key="delete"/>,
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={exercise.name}
      description={exercise.description}
    />
  </Card>   
      ))}
        </div>
        <Title>Legs</Title>
       <div className={styles.videoDiv}>
            {legExercises?.map((exercise) => (
              <Card
    style={{ minWidth: 480, padding: 25, margin: 20 }}
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
        <DeleteOutlined key="delete"/>,
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={exercise.name}
      description={exercise.description}
    />
  </Card>   
      ))}
        </div>
        <Title>Upper Body</Title>
       <div className={styles.videoDiv}>
            {upperBodyExercises?.map((exercise) => (
              <Card
    style={{ minWidth: 480, padding: 25, margin: 20 }}
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
        <DeleteOutlined key="delete"/>,
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={exercise.name}
      description={exercise.description}
    />
  </Card>   
      ))}
        </div>
      </Admin>
      </>
    )
  }
  
  export default GymAbs;
  