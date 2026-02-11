import React from 'react';

const StaffCard = ({ name, role, id, description, imageUrl }) => {
  const fallbackImage = `https://placehold.co/160x160/F3F4F6/6B7280?text=${name.split(' ')[0] || 'User'}`;
  const profileUrl = `https://www.torn.com/profiles.php?XID=${id}`;

  const CardWrapper = role === "Council" ? "div" : "a";
  const cardProps = role === "Council"
    ? { className: "staff-card" }
    : { href: profileUrl, target: "_blank", rel: "noopener noreferrer", className: "staff-card" };

  return (
    <CardWrapper {...cardProps}>
      <div className="image-container">
        <img
          src={imageUrl || fallbackImage}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
        <span className="role-badge">{role}</span>
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>[{id}]</p>
        {description && <p>{description}</p>}
      </div>
    </CardWrapper>
  );
};

const StaffGrid = () => {
  const staff = [
    { name: 'MIA', role: 'Management', id: '131289', description: 'Flower and Plushies', imageUrl: 'https://profileimages.torn.com/7bad1e2c-afea-460f-a537-8bbf29cf33ca-131289.jpg' },
    { name: 'Galloinfligo', role: 'Management', id: '2133394', description: 'Drugs and Temps', imageUrl: 'https://profileimages.torn.com/40407415-54d0-727d-2133394.gif' },
    { name: 'Coconut', role: 'Management', id: '2236969', imageUrl: 'https://profileimages.torn.com/5b1cafce-3026-4b41-91d9-54aab61e65c8-2236969.jpg' },
    { name: 'Kaneki', role: 'Management', id: '2685512', imageUrl: 'https://profileimages.torn.com/9333b9b7-76f5-4357-954d-ff209b443e01-2685512.png' },    
    { name: 'Neosus', role: 'Management', id: '2641396', imageUrl: 'https://profileimages.torn.com/460bde7e-f162-4b72-9d07-2665e38fb2c8-2641396.png' },
    { name: 'RakuyoYumishi', role: 'Management', id: '3248757', imageUrl: 'https://profileimages.torn.com/b96ea0f0-76b3-4382-bd31-0b9874393376-3248757.png' },
    { name: 'TheFelan', role: 'Management', id: '945786', imageUrl: 'https://profileimages.torn.com/d5e0ef1e-db43-4fc7-9406-febfe926cdfc-945786.png' },
    { name: 'harpy', role: 'Management', id: '2630673', imageUrl: 'https://profileimages.torn.com/1662e9a8-466d-4ea5-894a-8e6e76fc5365-2630673.png' },
    { name: 'Marzen', role: 'Developer', id: '3385879', description: 'Website Developer', imageUrl: 'https://profileimages.torn.com/ce1ba452-29b1-4bf5-913b-f850c49b93e2-3385879.png' },
    { name: 'Oldmandanky', role: 'Developer', id: '3191055', description: 'Bot Developer', imageUrl: 'https://profileimages.torn.com/45721035-2add-4ea3-bb02-69e866a304f8-3191055.png?v=1940629196397' },
    { name: 'Zoblefu', role: 'Developer', id: '2890330', imageUrl: 'https://profileimages.torn.com/68abf78b-2249-52bd-2890330.png' },
    { name: 'Anenes', role: 'Council', id: '2646884', imageUrl: 'https://profileimages.torn.com/9dc90362-e06b-4764-aeee-d51a24592573-2646884.gif' },
    { name: 'Kv0the', role: 'Council', id: '2153277', description: 'Founder', imageUrl: 'https://profileimages.torn.com/34d700f5-268c-a7fb-2153277.png' },
    { name: 'krasswez', role: 'Council', id: '2667147', imageUrl: 'https://profileimages.torn.com/228c78bc-31b4-4eec-ac03-1d168a2493e4-2667147.png' },    
  ];

  return (
    <div className="staff-grid">
      {staff.map((member, idx) => (
        <StaffCard key={idx} {...member} />
      ))}
    </div>
  );
};

export default StaffGrid;
