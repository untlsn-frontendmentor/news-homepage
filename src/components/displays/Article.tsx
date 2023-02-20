type ArticleProps = {
  index: number,
  image: string,
  title: string,
  description: string
}

export default function Article(props: ArticleProps) {
  return (
    <article class="grid-(~ cols-[1fr_2fr]) gap-(x-4 y-2)">
      <img src={props.image} alt={props.title} class="row-span-3 my-auto" />
      <p class="text-4xl font-bold opacity-20">{String(props.index).padStart(2, '0')}</p>
      <header class="text-2xl font-bold">{props.title}</header>
      <p>
        {props.description}
      </p>
    </article>
  );
}
