/* eslint-disable no-use-before-define */
import {
  Grid,
  Stack,
  Stepper,
  styled,
  Step,
  StepLabel,
  Typography,
  Button,
  ButtonProps,
  Chip,
  IconButton,
} from '@mui/material';
import {
  AutoFixHighOutlined,
  BorderColorOutlined,
  Close,
  ContentPasteSearch,
  DynamicFormOutlined,
  FactCheckOutlined,
} from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../components/SideBar';
import SideBarItem from '../components/SideBarItem';
import SideBarItemLabel from '../components/SideBarItemLabel';
import TemplateCard from '../components/TemplateCard';
import TemplatePreviewDialog from '../components/TemplatePreviewDialog';
import TemplatePreviewDialogAppBar from '../components/TemplatePreviewDialog/TemplatePreviewDialogAppBar';
import DesktopMobileToggle from '../components/DeskopMobileToggle';
import TemplatePreviewDialogImage from '../components/TemplatePreviewDialog/TemplatePreviewImage';
import TemplatePreviewDialogContent from '../components/TemplatePreviewDialog/TemplatePreviewDialogContent';
import templatePreviewSlice from '../store/test-flight/templatePreviewSlice';
import { selectTemplatePreviewState } from '../store/test-flight/selectors';

const separatorColor = '#E0E0E0';
// const separatorColor = 'red';
const SideBarPane = styled(Grid)`
  /* background-color: red; */
  border: 0;
  border-right: 1px;
  border-color: ${separatorColor};
  /* border-right: 1px solid rgba(255, 255, 255, 0.3); */
  border-style: solid;
`;

const StepperPane = styled(Grid)`
  /* background-color: red; */
  padding-left: 20px;
  width: 214px;
  flex-shrink: 0;
  border: 0;
  border-right: 1px;
  border-color: ${separatorColor};
  border-style: solid;
`;

const ContentPane = styled(Grid)`
  //background-color: red;
  /* border: thin solid black; */
  padding-left: 20px;
  flex-grow: 1;
`;

const ColorButton = styled(Button)<
  ButtonProps & {
    mainColor?: string;
    mainColorHover?: string;
    textColor: string;
    borderColor?: string;
    borderColorHover?: string;
  }
>(
  ({
    mainColor,
    mainColorHover,
    textColor,
    borderColor,
    borderColorHover,
  }) => ({
    color: textColor,
    borderColor,
    backgroundColor: mainColor,
    '&:hover': {
      backgroundColor: mainColorHover,
      borderColor: borderColor || borderColorHover,
    },
  })
);

interface TestFlightTemplate {
  name: string;
  description: string;
  coverUrl: string; // posterUrl?
  desktopUrl: string;
  mobileUrl: string;
  tags: string[];
}

const templates: TestFlightTemplate[] = [
  {
    name: 'Tropical Lift',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl:
      'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',

    desktopUrl:
      'https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg',

    mobileUrl:
      'https://images.pexels.com/photos/11463999/pexels-photo-11463999.jpeg',

    tags: ['Automotive', 'Energy'],
  },
  {
    name: 'Rocket Science',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl:
      'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',

    desktopUrl:
      'https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg',

    mobileUrl:
      'https://images.pexels.com/photos/11463999/pexels-photo-11463999.jpeg',
    tags: ['Art'],
  },
  {
    name: 'Daily Scrum',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl:
      'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',

    desktopUrl:
      'https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg',

    mobileUrl:
      'https://images.pexels.com/photos/11463999/pexels-photo-11463999.jpeg',

    tags: ['Production'],
  },
  {
    name: 'San Tropez',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl:
      'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',

    desktopUrl:
      'https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg',

    mobileUrl:
      'https://images.pexels.com/photos/11463999/pexels-photo-11463999.jpeg',

    tags: ['Travel'],
  },
  {
    name: 'Generic Template',
    description: 'Lorem ipsum dolor sit amet.',
    coverUrl:
      'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',

    desktopUrl:
      'https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg',

    mobileUrl:
      'https://images.pexels.com/photos/11463999/pexels-photo-11463999.jpeg',

    tags: ['AllStars'],
  },
];

const macBookStyleProps = {
  width: '1512px',
  borderRight: `thin solid ${separatorColor}`,
};

export const TestFlightVariantDetail = () => {
  const dispatch = useDispatch();
  const templatePreviewState = useSelector(selectTemplatePreviewState);

  return (
    <Stack height="100%" sx={macBookStyleProps} direction="row">
      {/*  Overlays */}
      <TemplatePreviewDialog open={templatePreviewState.open}>
        <TemplatePreviewDialogAppBar
          startContent={
            <Typography variant="h6" noWrap={true}>
              {templatePreviewState.title}
            </Typography>
          }
          centerContent={
            <DesktopMobileToggle
              value={templatePreviewState.format}
              // TODO: adjust onChange format type 'desktop' | 'mobile'
              onChange={(e, format) => {
                // Check to compensate Bug in DesktopMobileToggle
                if (format) {
                  dispatch(templatePreviewSlice.actions.formatChanged(format));
                }
              }}
            />
          }
          endContent={
            <IconButton
              onClick={() => {
                console.log('Close Template Preview');
                dispatch(templatePreviewSlice.actions.closed());
              }}
            >
              <Close />
            </IconButton>
          }
        />
        <TemplatePreviewDialogContent>
          {/* TODO:  TemplatePreviewDialogImage.src should accept [null or undefined]  */}
          {templatePreviewState.activeSrc && (
            <TemplatePreviewDialogImage src={templatePreviewState.activeSrc} />
          )}
        </TemplatePreviewDialogContent>
      </TemplatePreviewDialog>

      <SideBarPane>
        {/* This will become a standalone connected sidebar */}
        <SideBar>
          <SideBarItem selected>
            <BorderColorOutlined />
            <SideBarItemLabel>Setup</SideBarItemLabel>
          </SideBarItem>
          <SideBarItem>
            <DynamicFormOutlined />
            <SideBarItemLabel>Landing Page</SideBarItemLabel>
          </SideBarItem>
          <SideBarItem>
            <ContentPasteSearch />
            <SideBarItemLabel>Landing Page</SideBarItemLabel>
          </SideBarItem>
          <SideBarItem>
            <FactCheckOutlined />
            <SideBarItemLabel>Campaign</SideBarItemLabel>
          </SideBarItem>
          <SideBarItem>
            <AutoFixHighOutlined />
            <SideBarItemLabel>Landing Page</SideBarItemLabel>
          </SideBarItem>
        </SideBar>
      </SideBarPane>

      <StepperPane>
        <Typography variant="h6" sx={{ mt: '16px', mb: '32px' }}>
          Setup
        </Typography>

        <Stepper orientation="vertical">
          <Step>
            <StepLabel>Template</StepLabel>
          </Step>
          <Step>
            <StepLabel>Name &amp; Logo</StepLabel>
          </Step>
          <Step>
            <StepLabel>Color</StepLabel>
          </Step>
          <Step>
            <StepLabel>Font</StepLabel>
          </Step>
        </Stepper>
      </StepperPane>

      <ContentPane>
        <Typography sx={{ mt: '32px', mb: '20px' }} variant="h5">
          Select a template
        </Typography>

        {/* TemplateSelectionContainer */}
        <Grid container={true} spacing={2} columns={3}>
          {templates.map(
            ({
              name = '',
              description = '',
              coverUrl,
              tags = ['Industry'],
              desktopUrl,
              mobileUrl,
            }) => (
              <Grid item={true} xs={1}>
                <TemplateCard
                  templatePreviewImageSrc={coverUrl}
                  // TODO: Rename to overlayContent?
                  // TODO: Allow react node, multiple elements
                  // can be provided with Fragment (<></>) naturally
                  actions={[
                    <ColorButton
                      variant="contained"
                      color="primary"
                      mainColor={teal[500]}
                      mainColorHover={teal[700]}
                      textColor="#fff"
                      onClick={() => {
                        console.log('Selected:', name);
                      }}
                    >
                      Select
                    </ColorButton>,

                    <ColorButton
                      variant="outlined"
                      color="primary"
                      textColor="#fff"
                      borderColor="#fff"
                      onClick={() => {
                        dispatch(
                          templatePreviewSlice.actions.opened({
                            title: name,
                            desktopUrl,
                            mobileUrl,
                          })
                        );
                      }}
                    >
                      Preview
                    </ColorButton>,
                  ]}
                  title={name}
                  description={description}
                  tags={tags.map((tag) => (
                    <Chip label={tag} variant="outlined" size="small" />
                  ))}
                />
              </Grid>
            )
          )}
        </Grid>
      </ContentPane>
    </Stack>
  );
};

export default TestFlightVariantDetail;
