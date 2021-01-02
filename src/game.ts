import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const purpleWeepingWillowTree = new Entity('purpleWeepingWillowTree')
engine.addEntity(purpleWeepingWillowTree)
purpleWeepingWillowTree.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(28.368873596191406, 40.515380859375, 28.55987548828125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5944652557373047, 0.6589547395706177, 0.6589547395706177)
})
purpleWeepingWillowTree.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/Tree_Leafs_01/Tree_Leafs_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
purpleWeepingWillowTree.addComponentOrReplace(gltfShape2)

const blueWeepingWillowTree = new Entity('blueWeepingWillowTree')
engine.addEntity(blueWeepingWillowTree)
blueWeepingWillowTree.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(13.64868450164795, 40.313140869140625, 3.8448448181152344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8008243441581726, 0.8008243441581726, 0.8008243441581726)
})
blueWeepingWillowTree.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("models/Tree_Leafs_02/Tree_Leafs_02.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
blueWeepingWillowTree.addComponentOrReplace(gltfShape3)

const bloomingTurquoiseAcaciaTree = new Entity('bloomingTurquoiseAcaciaTree')
engine.addEntity(bloomingTurquoiseAcaciaTree)
bloomingTurquoiseAcaciaTree.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(3.7460756301879883, 40.25172424316406, 28.39208221435547),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6696300506591797, 0.6696300506591797, 0.6696300506591797)
})
bloomingTurquoiseAcaciaTree.addComponentOrReplace(transform8)
const gltfShape4 = new GLTFShape("models/Tree_Forest_Turquoise_02/Tree_Forest_Turquoise_02.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bloomingTurquoiseAcaciaTree.addComponentOrReplace(gltfShape4)

const studzartcadebuildingNeonCuts = new Entity('studzartcadebuildingNeonCuts')
engine.addEntity(studzartcadebuildingNeonCuts)
studzartcadebuildingNeonCuts.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
studzartcadebuildingNeonCuts.addComponentOrReplace(transform9)
const gltfShape5 = new GLTFShape("models/StudzArtcadeBuilding_NeonCuts_1.gltf")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
studzartcadebuildingNeonCuts.addComponentOrReplace(gltfShape5)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(7.713541030883789, 0.39209234714508057, 9.16369915008545),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
radio.addComponentOrReplace(transform10)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(radio, {"startOn":true,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3"}, createChannel(channelId, radio, channelBus))