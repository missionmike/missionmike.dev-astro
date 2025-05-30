export type Photo = {
  src: string;
  alt: string;
  caption: string;
  size?: 'small' | 'medium' | 'large'; // Controls the grid span
};

export const photos: Photo[] = [
  {
    src: '/static/images/mosaic/family-gaming.jpg',
    alt: 'Family gaming setup and entertainment area',
    caption:
      'We love playing games together! We share videos of our games on our YouTube channels, ' +
      '"Sleepy Slawth Gaming" and "Michael & Dad Gaming & Stuff"',
    size: 'large',
  },
  {
    src: '/static/images/mosaic/family-breakfast.jpg',
    alt: 'Family breakfast time',
    caption: 'Family is my motivation.',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/family-gaming-photo-with-memphis.jpg',
    alt: 'Gaming session with Memphis',
    caption: 'Playing "Hello Neighbor" with the whole fam!',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/office-dogs.jpg',
    alt: 'Office dogs keeping me company while working',
    caption: 'Office dogs keeping me company while working.',
    size: 'small',
  },
  {
    src: '/static/images/mosaic/dark-mode.jpg',
    alt: 'Dark mode development setup',
    caption: 'Dark mode.',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/sound-board.jpg',
    alt: 'Audio mixing and sound board setup',
    caption: 'I love mixing sound at South Beach Church.',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/video-editing.jpg',
    alt: 'Video editing workspace',
    caption: 'Working on my YouTube videos.',
    size: 'large',
  },
  {
    src: '/static/images/mosaic/sound-booth-volunteering.jpg',
    alt: 'Volunteering at the sound booth',
    caption: 'Volunteering at the sound booth, training Memphis to be a sound engineer.',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/old-office-space.jpg',
    alt: 'Previous office setup',
    caption: 'This was our office space before we moved to the new office.',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/michael-and-memphis.jpg',
    alt: 'Michael and Memphis',
    caption: 'Michael and Memphis',
    size: 'small',
  },
  {
    src: '/static/images/mosaic/office-rearrange.jpg',
    alt: 'Office space rearrangement',
    caption: 'Occasionally, we rearrange the office space.',
    size: 'large',
  },
  {
    src: '/static/images/mosaic/family-photo-shoot.jpg',
    alt: 'Family photo shoot',
    caption: 'Family photo shoot',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/playing-wrecked.jpg',
    alt: 'Playing Wrecked game',
    caption: 'Playing "Wrecked" with the fam!',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/melody-fishing.jpg',
    alt: 'Melody fishing',
    caption: 'Fishing with Melody and the family.',
    size: 'small',
  },
  {
    src: '/static/images/mosaic/dad-and-memphis.jpg',
    alt: 'Dad and Memphis together',
    caption: 'Grandpa and baby Memphis.',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/remote-control-gummy.jpg',
    alt: 'Remote control gummy',
    caption: 'Michael eats a remote control gummy.',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/cleaning-max-mouth.jpg',
    alt: "Cleaning Max's mouth",
    caption: "Memphis cleaning Max's mouth.",
    size: 'small',
  },
  {
    src: '/static/images/mosaic/youtube-thumbnail-sleepy-slawths.jpg',
    alt: 'YouTube thumbnail for Sleepy Slawths',
    caption: 'YouTube profile photo for Sleepy Slawths',
    size: 'medium',
  },
  {
    src: '/static/images/mosaic/happy-memphis-with-grandma.jpg',
    alt: 'Happy Memphis with Grandma',
    caption: 'Happy Memphis with Grandma',
    size: 'small',
  },
];
