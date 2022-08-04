import Card from "../../components/Card";
import GradientBar from "../../components/GradientBar";
import { Headline, Grid } from "../../styles/GlobalStyles";
import { HomeProps } from "./types";

const Home = ({ data }: HomeProps) => (
  <main data-testid="home-page">
    <Headline>Latest videos</Headline>

    <Grid>
      {data.map(({ _id, description, publishDate, title, urlTitle }) => {
        const imageTemplatesSrc =
          "https://img.youtube.com/vi/lfEgNwABGdI/hqdefault.jpg";

        return (
          <div key={_id}>
            <Card
              testId={title}
              description={description}
              publishDate={publishDate}
              title={title}
              urlTitle={urlTitle}
              imgSrc={imageTemplatesSrc}
            />

            <GradientBar />
          </div>
        );
      })}
    </Grid>
  </main>
);

export default Home;
