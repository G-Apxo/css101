import React from "react";
import { getCompanyImage } from "../../../../hooks/images";
import { useCounter } from "@chakra-ui/counter";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Input,
  Flex,
  Heading,
  Box,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import pointsImg from "../../../../assets/images/points.png";

const Votemodal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { key, user } = useSelector((state) => state.user);
  const [imageLoaded, setImageLoaded] = useState({
    cover: false,
    profile: false,
  });
  const maxNumber = 1000;
  const { id } = useParams();
  const counter = useCounter({
    max: maxNumber,
    min: 0,
    step: 1,
  });

  const voteValue = counter.value;
  // set counter.value to companies collection
  // const handeSubmit = () => {
  //   alert("Your vote has been submitted" + voteValue);
  // };

  // post data ro votingSystem
  // console.log(voteValue);
  // console.log(id);
  // console.log(user.uid);
  const handleVote =  () => {
    fetch("http://localhost:5000/pyme-v2/us-central1/votingSystem", {
      method: "POST",
      body: JSON.stringify({
        votePoint: voteValue,
        userID: user.uid,
        CompanyID: id,
        CompanyName: props.companyName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Box
        bg="#ffdfc6"
        w="200px"
        p={4}
        pt={6}
        pb={6}
        color="white"
        borderRadius={"15px"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid black"}
      >
        <Box pl={"3.5vw"} pr={"3.5vw"}>
          <Image src={pointsImg} w="100%" />
        </Box>
        <Text
          fontSize={"24px"}
          fontFamily={"Cy"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          {" "}
          131313
        </Text>
      </Box>
      <Button
        onClick={onOpen}
        mt={4}
        bgColor={"#529ffc"}
        fontFamily={"Cy"}
        border={"1px solid black"}
        borderRadius={"15px"}
        textTransform={"uppercase"}
        color={"white"}
        fontSize={"24px"}
        w={"100%"}
        h={"50px"}
      >
        vote
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent bg={"#fffae9"} borderRadius="25px" border={"2px dashed"}>
          <ModalHeader textAlign={"center"}>
            <Heading fontFamily={"Cy"}>Vote</Heading>
            <Text fontFamily={"Cy"}>
              Show your support by using your Pyme Points to upvote this
              project. Each vote costs 1 Pyme Point.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} display={"flex"} justifyContent={"center"}>
            <Box w={"40%"}>
              <Image
                src={getCompanyImage(props.data.id) + `&key=${key}`}
                display={!imageLoaded ? "none" : "block"}
                onLoad={() => setImageLoaded(true)}
                borderRadius="35px"
              />
              <Flex
                w={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={"15px"}
              >
                <Text
                  fontFamily={"Cy Bold"}
                  fontSize={"42px"}
                  fontWeight={"900"}
                  mr={"15px"}
                  onClick={() => counter.decrement()}
                >
                  -
                </Text>
                <Input
                  fontFamily={"Cy Bold"}
                  fontWeight={"900"}
                  fontSize={"22px"}
                  height={"50px"}
                  bg={"white"}
                  p={"12px"}
                  border={"solid 2px black"}
                  w={"50%"}
                  borderColor={"black"}
                  type="number"
                  value={voteValue}
                  onChange={(e) =>
                    e.target.value <= maxNumber &&
                    counter.setValue(Math.ceil(e.target.value))
                  }
                  textAlign="center"
                />
                <Text
                  fontFamily={"Cy Bold"}
                  fontSize={"42px"}
                  fontWeight={"900"}
                  ml={"15px"}
                  onClick={() => counter.increment()}
                >
                  +
                </Text>
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Flex direction={["column"]} w={"100%"}>
              <Box w={"100%"}>
                <Flex>
                  <Text fontFamily={"Cy"}>
                    This will cost you{" "}
                    <Text as={"span"} fontFamily={"Cy Bold"}>
                      {voteValue}{" "}
                    </Text>
                    Pyme Points.
                  </Text>
                </Flex>
              </Box>
              <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"end"}
                mt={"15px"}
              >
                <Button
                  bg="#ffdfc6"
                  fontFamily={"Cy"}
                  p={"15px"}
                  border={"solid 1px black"}
                  borderRadius={"8px"}
                  onClick={handleVote}
                >
                  Cancel
                </Button>
                <Button
                  ml={3}
                  bgColor={"#529ffc"}
                  fontFamily={"Cy"}
                  border={"1px solid black"}
                  borderRadius={"8px"}
                  textTransform={"uppercase"}
                  color={"white"}
                  colorScheme="blue"
                  onClick={handleVote}
                >
                  Vote
                </Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Votemodal;
