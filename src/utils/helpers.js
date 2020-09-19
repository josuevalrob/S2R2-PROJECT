import Settings from '@material-ui/icons/Settings';
import AudioTrack from '@material-ui/icons/Audiotrack';
import Person from '@material-ui/icons/Person';
import List from '@material-ui/icons/List';

export const buttonsProps = (role) => {
  return role ==='teacher' 
  ? [
    {
      label:  'New Record',
      Icon: Settings,
      link: "/new-record"
    },
    {
      label:  'Check Recordins',
      Icon: AudioTrack,
      link: "/recordings" 
    },
    {
      label:  'New Student',
      Icon: Person,
      link: "/sign-up"
    },
    {
      label:  'Check Students',
      Icon: List,
      link: "/recordings" 
    }
  ]
  : [
    {
      label:  'New Record',
      Icon: Settings,
      link: "/new-record"
    },
    {
      label:  'Check Recordins',
      Icon: AudioTrack,
      link: "/recordings" 
    },
  ]
}