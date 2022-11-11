import {
    Flex,
    Box,
    Text,
    Link,
    Image,
    Center,
    Container,
    useBreakpointValue,
    Spacer,
    Tag,
    TagLabel,
  } from "@chakra-ui/react";
  import { useSelector } from "react-redux";
  import { useEffect, useState, useMemo } from "react";
  import { BsTwitter, BsYoutube } from "react-icons/bs";
  import { getCompanyImage } from "../../../../hooks/images";
  import { getCompanyCoverImage } from "../../../../hooks/images";
  import { TbBrandDiscord } from "react-icons/tb";
  import { BsGlobe } from "react-icons/bs";
  import Votemodal from "./Votemodal";
  
  const PublicHeader = ({ profileData }) => {
    const { key } = useSelector((state) => state.user);
  
    const [copied, setCopied] = useState(false);
    const [imageLoaded, setImageLoaded] = useState({
      cover: false,
      profile: false,
    });
    const value = useBreakpointValue({
      base: "23px",
      sm: "23px",
      md: "26px",
      lg: "30px",
    });
    const [isImageExists, setIsImageExists] = useState(false);
  
    useEffect(() => {
      let xhr = new XMLHttpRequest();
      let url = getCompanyCoverImage(profileData.id) + `&key=${key}`;
      xhr.open("GET", getCompanyCoverImage(profileData.id) + `&key=${key}`);
  
      xhr.onload = function () {
        let status = xhr.status;
        if (status === 404) {
          setIsImageExists(false);
        }
      };
  
      xhr.send();
  
      if (xhr.status != 404) {
        setIsImageExists(true);
      }
    }, []);
  
    useEffect(() => {
      if (copied) {
        const eventHandler = () => setCopied(false);
        const timeout = window.setTimeout(eventHandler, 1500);
  
        return () => {
          window.clearTimeout(timeout);
        };
      }
    }, [copied]);
  
    const getSocialImage = (key) => {
      switch (true) {
        case key === "discord":
          return <TbBrandDiscord color="#fff" size={value} />;
  
        case key === "twitter":
          return <BsTwitter color="#fff" size={value} />;
  
        case key === "youtube":
          return <BsYoutube color="#fff" size={value} />;
  
        case key === "website":
          return <BsGlobe color="#fff" size={value} />;
        default:
          return "";
      }
    };
  
    const companySocials = useMemo(() => {
      if (profileData.socials && Object.values(profileData.socials).length) {
        return Object.entries(profileData.socials)
          .filter((el) => el[1] !== "" && getSocialImage(el[0]) !== "")
          .sort((a, b) => {
            const nameA = a[0].toUpperCase(); // ignore upper and lowercase
            const nameB = b[0].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
  
            // names must be equal
            return 0;
          });
      } else {
        return [];
      }
    }, []);
    console.log(key, "key");
    return (
      <>
        <Box as="section">
          {isImageExists && (
            <Image
              bg={"#8D8D8D"}
              src={getCompanyCoverImage(profileData.id) + `&key=${key}`}
              w="100%"
              h="300px"
              alt=""
              border={"none"}
              display={!imageLoaded ? "none" : "block"}
              onLoad={() => setImageLoaded(true)}
            />
          )}
          <Container
            as="section"
            maxW={["100%", "95%", "90%", "86%"]}
            mt={"30px"}
          >
            <Flex
              flexDirection={["column", null, null, "row"]}
              alignItems="center"
            >
              <Flex
                w="100%"
                maxW={"185px"}
                justifyContent={["center", null, null, "flex-start"]}
              >
                <Image
                  src={getCompanyImage(profileData.id) + `&key=${key}`}
                  w="185px"
                  h="185px"
                  display={!imageLoaded ? "none" : "block"}
                  onLoad={() => setImageLoaded(true)}
                  borderRadius="35px"
                />
                {!imageLoaded ? (
                  <Box w="185px" h="185px" bg="#529FFC" borderRadius={"35px"} />
                ) : null}
              </Flex>
  
              <Box mt={["3", null, null, "0"]} ml={["0", null, null, "5"]}>
                <Box textAlign={["center", null, null, "left"]}>
                  <Text
                    fontFamily={"Cy Wide"}
                    fontSize={["1.5rem", "2.424rem", "2.981rem", null, "6xl"]}
                    textTransform={"capitalize"}
                  >
                    {profileData.name}
                  </Text>
                </Box>
  
                {companySocials.length ? (
                  <Flex
                    flexWrap={"wrap"}
                    alignItems="center"
                    mt={["3", null, null, "2"]}
                    justifyContent={["center", null, null, "flex-start"]}
                  >
                    {companySocials.map((el, i) => (
                      <Link href={el[1]} isExternal>
                        <Center
                          bg="#000"
                          w={["43px", null, "46px", null, "50px"]}
                          h={["43px", null, "46px", null, "50px"]}
                          borderRadius={"100%"}
                          key={el[0]}
                          ml={i === 0 ? "0px" : "1.5"}
                        >
                          {getSocialImage(el[0])}
                        </Center>
                      </Link>
                    ))}
                  </Flex>
                ) : null}
              </Box>
  
              <Spacer />
              <Flex flexDirection={["column"]}>
                <Votemodal data={profileData} companyName = {profileData.name} />
              </Flex>
            </Flex>
            <Flex
              mt={"20px"}
              sx={{
                "@media (max-width: 990px)": {
                  justifyContent: "center",
                  mt: "20px",
                },
              }}
            >
              <Tag size="lg" bg={"black"} borderRadius="full">
                <TagLabel
                  color={"white"}
                  fontWeight={"900"}
                  fontSize={"20px"}
                  fontFamily={"Cy Bold"}
                  pl={"10px"}
                  pr={"10px"}
                >
                  {String(profileData.tags).toUpperCase()}
                </TagLabel>
              </Tag>
            </Flex>
          </Container>
        </Box>
        {/* /////////////////////////// MODAL /////////////////////////// */}
      </>
    );
  };
  
  export default PublicHeader;
  