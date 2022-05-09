import { Vector3 } from 'three';


export class GeometryEdgeVertices {

	static getVertices(object = null) {
		const position = object.geometry.attributes.position;
		let edgeVertices = [];
		for (let i = 0, l = position.count; i < l; i++) {
			let vector = new Vector3();
			vector.fromBufferAttribute(position, i);
			vector.applyMatrix4(object.matrixWorld);
			//    let vec = edgeVertices.find(vectorAdded=> GeometryEdgeVertices.vectorsAreEquals(vectorAdded,vector));
			//    if(!vec){
			edgeVertices.push(vector);
			//    }
		}
		return edgeVertices;
	}

	static vectorsAreEquals(v1, v2, epsilon = Number.EPSILON) {
		return ((Math.abs(v1.x - v2.x) < epsilon) && (Math.abs(v1.y - v2.y) < epsilon) && (Math.abs(v1.z - v2.z) < epsilon));
	}

}

