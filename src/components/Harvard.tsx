import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonImg,
  IonSpinner,
} from "@ionic/react";
import axios from "axios";
import './Harvard.css'

export const getLatestPosts = async () => {
  const response = await axios.get(
    "https://news.harvard.edu/wp-json/wp/v2/posts?per_page=3"
  );
  return response.data;
};

export interface WpPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
}

const Harvard: React.FC = () => {
  const [posts, setPosts] = useState<WpPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getLatestPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <IonSpinner></IonSpinner>;
  }

  return (
    <>
      <div className="image">
        <IonImg
          src="https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png"
          alt="Harvard Logo"
        />
      </div>

      {posts.map((post) => (
        <IonCard key={post.id}>
          <IonCardHeader>
            <IonCardTitle
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <IonButton href={post.link} target="_blank">
              Ver completo
            </IonButton>
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};

export default Harvard;
