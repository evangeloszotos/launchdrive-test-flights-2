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
    'main-color'?: string;
    'main-color-hover'?: string;
    'text-color': string;
    'border-color'?: string;
    'border-color-hover'?: string;
  }
>(
  ({
    'main-color': mainColor,
    'main-color-hover': mainColorHover,
    'text-color': textColor,
    'border-color': borderColor,
    'border-color-hover': borderColorHover,
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

    coverUrl: 'http://placekitten.com/374/176?image=5',
    desktopUrl: 'http://placekitten.com/1000/2600?image=5',
    mobileUrl: 'http://placekitten.com/400/2600?image=5',

    tags: ['Automotive', 'Energy', '1000x2600'],
  },
  {
    name: 'Rocket Science',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl: 'http://placekitten.com/374/176?image=1',
    desktopUrl: 'http://placekitten.com/800/800?image=1',
    mobileUrl: 'http://placekitten.com/400/800?image=1',

    tags: ['Art', '800x800'],
  },
  {
    name: 'Daily Scrum',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl: 'http://placekitten.com/374/176?image=2',
    desktopUrl: 'http://placekitten.com/800/1000?image=2',
    mobileUrl: 'http://placekitten.com/400/1000?image=2',

    tags: ['Production', '800x1000'],
  },
  {
    name: 'San Tropez',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl: 'http://placekitten.com/374/176?image=3',
    desktopUrl: 'http://placekitten.com/800/1200?image=3',
    mobileUrl: 'http://placekitten.com/400/1200?image=3',

    tags: ['Travel', '800x1200'],
  },
  {
    name: 'Generic Template',
    description: 'Lorem ipsum dolor sit amet.',

    coverUrl: 'http://placekitten.com/374/176?image=4',
    desktopUrl: 'http://placekitten.com/800/1400?image=4',
    mobileUrl: 'http://placekitten.com/400/1400?image=4',

    tags: ['AllStars', '800x1400'],
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
            (
              {
                name = '',
                description = '',
                coverUrl,
                tags = ['Industry'],
                desktopUrl,
                mobileUrl,
              },
              index
            ) => (
              <Grid key={`template-${index}`} item={true} xs={1}>
                <TemplateCard
                  templatePreviewImageSrc={coverUrl}
                  // TODO: Rename to overlayContent?
                  // TODO: Allow react node, multiple elements
                  // can be provided with Fragment (<></>) naturally
                  actions={[
                    <ColorButton
                      variant="contained"
                      color="primary"
                      main-color={teal[500]}
                      main-color-hover={teal[700]}
                      text-color="#fff"
                      onClick={() => {
                        console.log('Selected:', name);
                      }}
                    >
                      Select
                    </ColorButton>,

                    <ColorButton
                      variant="outlined"
                      color="primary"
                      text-color="#fff"
                      border-color="#fff"
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
