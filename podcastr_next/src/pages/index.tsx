import { GetStaticProps } from "next";
import { api } from "../services/api";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { converteDurationToTimeString } from "../utils/converteDurationToTimeString";

import styles from "./home.module.scss";

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: string;
  durationAsString: string;
  description: string;
  url: string;
};

type HomeProps = {
  episodes: Episode[];
};

export default function Home(props: HomeProps) {
  return (
    <div className={styles.homepage}>
      <section className={styles.lastetEpisodes}></section>
      <section className={styles.allEpisodes}></section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), `d MMM yy`, {
        locale: ptBR,
      }),
      duration: Number(episode.file.duration),
      durationAsString: converteDurationToTimeString(
        Number(episode.file.duration)
      ),
      description: episode.description,
      url: episode.file.url,
    };
  });

  const lastesEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      allEpisodes,
      lastesEpisodes,
    },
    revalidate: 60 * 60 * 8,
  };
};
