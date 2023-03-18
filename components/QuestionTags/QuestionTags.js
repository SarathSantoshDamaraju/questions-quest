import { Badge } from '@mantine/core';

export default function QuestionTags(props) {
    const { tags } = props;

    console.log(tags)
    if (!tags.length) {
        return <></>;
    }

    return (
        <div className="tag-container">
            {tags.map((tag) => (
                <Badge key={tag} sx={{ minWidth: '100px' }}>
                    {tag}
                </Badge>
            ))}
        </div>
    );
}

QuestionTags.defaultProps = {
    difficulty: [],
};
