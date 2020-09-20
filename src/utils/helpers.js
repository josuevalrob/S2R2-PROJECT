import Settings from '@material-ui/icons/Settings';
import Mic from '@material-ui/icons/Mic';
import AudioTrack from '@material-ui/icons/Audiotrack';
import Person from '@material-ui/icons/Person';
import List from '@material-ui/icons/List';

export const buttonsProps = (role) => {
  return role ==='teacher' 
  ? [
    {
      label:  'New Record',
      Icon: Mic,
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
      link: "/user"
    },
    {
      label:  'Check Students',
      Icon: List,
      link: "/students" 
    }
  ]
  : [
    {
      label:  'settings',
      Icon: Settings,
      link: "/settings"
    },
    {
      label:  'Check sessions',
      Icon: AudioTrack,
      link: "/recordings" 
    },
  ]
}