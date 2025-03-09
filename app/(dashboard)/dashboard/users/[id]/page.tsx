import React from "react";

async function UserDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <h1>User {id} details</h1>
    </div>
  );
}

export default UserDetail;
