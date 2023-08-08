import { ProfileBox, DescrBox, Image, List, Item } from './Profile.styled';

export const Profile = ({
  user: { stats, location, avatar, tag, username },
}) => {
  return (
    <ProfileBox>
      <DescrBox>
        <Image src={avatar} alt="User avatar" />
        <h3 className="name">{username}</h3>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </DescrBox>

      <List>
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Item>
      </List>
    </ProfileBox>
  );
};
