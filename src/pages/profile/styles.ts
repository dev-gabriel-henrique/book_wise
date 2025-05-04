import { styled } from "@/lib/stitches.config";

export const ProfileContainer = styled("div", {
  position: "relative",
  marginLeft: "calc(14.5rem + 1.25rem + 6rem)",
  marginTop: "4.5rem",

  display: "flex",
  flexDirection: "column",

  h5: {
    marginBottom: "$4",
    fontSize: "$sm",
    lineHeight: "$base",
    color: "$gray100",
  },

  "& > div:first-child": {
    marginBottom: "$10",

    display: "flex",
    alignItems: "center",
    gap: "$3",

    h1: {
      fontFamily: "$default",
      fontSize: "$xl",
      lineHeight: "$short",
      color: "$gray100",
    },

    svg: {
      color: "$green100",
    },
  },
});

export const ProfileDetailsContainer = styled("aside", {
  position: "absolute",
  top: "9.125rem",
  right: "7rem",

  borderInline: '1px solid $gray700',

  header: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    textAlign: 'center',
    gap: '$5',

    h4: {
      color: '$gray100',
      fontSize: '$5',
      lineHeight: '$short',
      fontWeight: '$bold',
    },

    span: {
      fontSize: '0.875rem',
      color: '$gray400',
    },
    
    div: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }
  },
  
  ul: {
    padding: '$5 3.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',

    listStyle: 'none',
    
    li: {
      display: 'flex',
      alignItems: 'center',
      gap: '$5',

      p: {
        color: '$gray200',
        fontSize: '$4',
        lineHeight: '$short',
        fontWeight: '$bold',
      },

      span: {
        color: '$gray300',
        fontSize: '0.875rem',
        lineHeight: '$base',
      },

      svg: {
        color: '$green100'
      }
    }
  },

  'hr.rounded': {
  marginInline: 'auto',
  marginBlock: '$8',
  width: '2rem',
  height: '4px',
  border: 'none',
  borderRadius: '$md',
  background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)'
}
})

export const ReviewedBooks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '$8'
})
