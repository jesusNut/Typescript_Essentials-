/**================================================
 **    ☠️☠️ INTERFACES - union and intersection ☠️☠️
 *================================================**/

// 🤪🤪🤪 All concepts remain same as discussed in
//  TypeAnnotation_2\type-annotation-union-advanced_8.ts
// & TypeAnnotation_2\type-annotation-intersection_14.ts

//! Unions and Intersections can be made from both types & interfaces BUT
//! BUT can be stored only in a 'type'.

//=============================================================================================

//example for intersection:

//? https://www.totaltypescript.com/tutorials/beginners-typescript/beginner-s-typescript-section/combining-types-to-create-new-types/exercise

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */

//todo SOLUTION:
type userpluspost = User & { posts: Post[] }; 
//! see we have stored intersection of interfaces in type(and not in interface)

export const getDefaultUserAndPosts = (): userpluspost => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);

//=============================================================================================

//example for Union :

interface martial {
  fname: string;
  age: number;
}

interface movies {
  inductedMovies: number;
  list: string[];
}


type martialArtsMovie = martial | movies;
//! see we have stored Union of interfaces in type(and not in interface)

const hollywood : martialArtsMovie = {
    fname : 'Karate',
    age: 99
}

const bollywood : martialArtsMovie = {
  inductedMovies: 9,
  list : ['Krish3','Doreamon', 'Bihari Karate Kid']
}

const tollywood : martialArtsMovie = {
    inductedMovies: 9,
    list : ['Ek gadar','DDLJ', 'K2KG'], 
    fname : 'Kungfu',
    age: 999
  }

  const bhollywood : martialArtsMovie = {
    inductedMovies: 9,
    list : ['Ek gadar','DDLJ', 'K2KG'], 
    fname : 'Kungfu',
  }

  const bengaliWood : martialArtsMovie = {
    list : ['Ek gadar','DDLJ', 'K2KG'], 
    fname : 'Kungfu',
    age: 999
  }

//   const oriaWood : martialArtsMovie = { //! ERROR
//     list : ['Ek gadar','DDLJ', 'K2KG'], 
//     fname : 'Kungfu',
//   }