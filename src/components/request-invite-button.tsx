interface RequestInviteButtonProps {
  collapse?: string;
}

export default function RequestInviteButton(props?: RequestInviteButtonProps) {
  return (
    <button className={`bg-gradient-to-r from-lime-green to-bright-cyan text-white rounded-full px-6 py-2 ${props?.collapse}`}>Request Invite</button>
  );
}