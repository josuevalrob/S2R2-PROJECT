import Mic from '@material-ui/icons/Mic';
import AudioTrack from '@material-ui/icons/Audiotrack';
import Person from '@material-ui/icons/Person';
import List from '@material-ui/icons/List';
import RecentActors from '@material-ui/icons/RecentActors';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import Explore from '@material-ui/icons/Explore';

export const buttonsProps = (role) => {
  return role ==='teacher' 
  ? [
    {
      label:  'New Record',
      Icon: Mic,
      link: "/new-record"
    },
    {
      label:  'Check Recordings',
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
      label:  'Check sessions',
      Icon: AudioTrack,
      link: "/recordings"
    },
    {
      label:  'Strategies',
      Icon: Explore,
      link: "/strategies"
    },
    {
      label:  'EFL Profile',
      Icon: RecentActors,
      link: "/efl"
    },
    {
      label:  'Emotions',
      Icon: InsertEmoticon,
      link: "/emotions"
    },
  ]
}

const hasCornitivesErrors = (skills, stage) => 
  skills
    .map(obj => delete obj._id && obj) //clean _id prop.
    .map(obj => Object.values(obj).some(ar => ar[stage]))
    .some(bool => !bool) //check if one boolean is false

export const validateEmpty = key => (recording, skills, stage ) => ({
  ...recording,
  ...(hasCornitivesErrors(skills, stage)
    ? { hasError:true,
        errors: {
        [key]: 'At least one value should be selected for both students.'
      }}
    : { hasError:false, [key]: skills})
})