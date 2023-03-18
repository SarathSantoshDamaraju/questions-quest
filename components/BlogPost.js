import { Card, Divider, Flex, Grid, Text } from "@mantine/core";

import DifficultyTag from "./difficultyTag";
import QuestionTags from "./QuestionTags/QuestionTags";

const BlogPost = ({ post }) => {
  return (
    <Grid.Col key={post.id} xs={12} sm={6} md={4} lg={3}>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Text size="xl" lineClamp={3} mb="xs">
          {post.title}
        </Text>
        <Text lineClamp={3} mb="xs" color="dimmed">
          {post.summary}
        </Text>
        <Flex direction="row" align="center" justify="space-between" gap="sm">
          <QuestionTags tags={post.tags} />
          <Divider orientation="vertical" />
          <DifficultyTag difficulty={post.difficulty} />
        </Flex>
      </Card>
    </Grid.Col>
  );
};

export default BlogPost;
