import React, { Component } from "react";

import Post from "./Post/Post";
import "./PostList.css";

import JulioProfilePic from "../../assets/julio-profile.png";
import DiegoProfilePic from "../../assets/diego-profile.png";
import GabrielProfilePic from "../../assets/gabriel-profile.png";
import ClaraProfilePic from "../../assets/clara-profile.png";
import CezarProfilePic from "../../assets/cezar-profile.png";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcântara",
          avatar: JulioProfilePic
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: DiegoProfilePic
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: GabrielProfilePic
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza?

        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: ClaraProfilePic
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: CezarProfilePic
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },
          {
            id: 3,
            author: {
              name: "Clara Lisboa",
              avatar: ClaraProfilePic
            },
            content:
              "Show, Cézar! Pode fazer que não vai se arrepender! Muito bom o conteúdo e a forma como ele é disponibilizado, além do network e do suporte incrível que eles dão!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </>
    );
  }
}
